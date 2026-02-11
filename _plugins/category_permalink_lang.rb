# DE-Kategorie-URLs: /category/ → /kategorie/ nur in der Standardsprache (de).
# EN bleibt /category/. Jekyll::Archives::Archive hat keinen url=-Setter.

Jekyll::Hooks.register :site, :pre_render do |site|
  next unless site.respond_to?(:active_lang) && site.active_lang.to_s == site.default_lang.to_s

  site.pages.each do |page|
    next unless page.url.to_s.start_with?("/category/")

    new_url = page.url.sub("/category/", "/kategorie/")
    page.instance_variable_set(:@url, new_url)
    page.instance_variable_set(:@relative_path, nil)
  end
end
