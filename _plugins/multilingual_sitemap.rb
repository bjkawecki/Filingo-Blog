# frozen_string_literal: true

require 'cgi'
require 'fileutils'
require 'time'

def filingo_escape_sitemap_url(url)
  match = url.match(%r{\A(https://[^/]+)/(.*)\z})
  return url unless match

  scheme_host = "#{match[1]}/"
  escaped_path = match[2].split('/').map { |segment| CGI.escape(segment).gsub('+', '%20') }.join('/')
  "#{scheme_host}#{escaped_path}"
end

Jekyll::Hooks.register :polyglot, :post_write do |site|
  site_url = site.config['url'].to_s.sub(%r{/\z}, '')
  next if site_url.empty?

  entries = Dir.glob(File.join(site.dest, '**', '*.html')).filter_map do |path|
    relative_path = path.delete_prefix("#{site.dest}/")
    next if relative_path == '404.html' || relative_path.end_with?('/404.html')
    next if relative_path.start_with?('assets/')

    url_path = if relative_path == 'index.html'
                 ''
               elsif relative_path.end_with?('/index.html')
                 relative_path.delete_suffix('index.html')
               else
                 relative_path
               end
    loc = "#{site_url}/#{url_path}"
    lastmod = File.mtime(path).utc.iso8601

    [loc, lastmod]
  end

  sitemap = +"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
  sitemap << "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n"
  entries.sort_by(&:first).each do |loc, lastmod|
    sitemap << "  <url>\n"
    sitemap << "    <loc>#{CGI.escapeHTML(filingo_escape_sitemap_url(loc))}</loc>\n"
    sitemap << "    <lastmod>#{lastmod}</lastmod>\n"
    sitemap << "  </url>\n"
  end
  sitemap << "</urlset>\n"

  File.write(File.join(site.dest, 'sitemap.xml'), sitemap)
end
