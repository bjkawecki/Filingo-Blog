# Fix für jekyll-polyglot: permalink_lang mit aufgelöster URL statt Permalink-Template
# (z. B. /:title.html). Ohne dieses Plugin würden Sprachlinks auf /en/:title.html zeigen.

Jekyll::Hooks.register :site, :after_init do |site|
  next unless site.respond_to?(:assignPageLanguagePermalinks, true)

  site.define_singleton_method(:assignPageLanguagePermalinks) do |doc, docs|
    page_id = doc.data['page_id']
    return if page_id.nil? || page_id.to_s.empty?

    doc.data['permalink_lang'] ||= {}
    docs.select { |dd| dd.data['page_id'] == page_id }.each do |dd|
      doc_lang = dd.data['lang'] || site.send(:derive_lang_from_path, dd) || site.default_lang
      # Aufgelöste URL verwenden statt data['permalink'] (kann Template wie /:title.html sein)
      resolved = dd.url.to_s.sub(/\A\//, '')
      # Sprachpräfix entfernen (z. B. "en/"), damit die Navbar ihn korrekt voranstellt
      resolved = resolved.sub(/\A#{Regexp.escape(doc_lang)}\//, '') if doc_lang != site.default_lang
      doc.data['permalink_lang'][doc_lang] = resolved
    end
  end
end
