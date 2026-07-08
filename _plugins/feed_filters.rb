# frozen_string_literal: true

module Jekyll
  module FeedFilters
    def strip_svg(input)
      input.to_s.gsub(/<svg\b[^>]*>.*?<\/svg>/m, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::FeedFilters)
