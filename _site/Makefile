# Filingo Blog – Entwicklung
# Nutzung: make [Ziel]

.PHONY: install build serve clean help

# Standard-Ziel: Hilfe anzeigen
help:
	@echo "Filingo Blog – verfügbare Ziele:"
	@echo "  make install   – Gems installieren (bundle install)"
	@echo "  make build     – Site bauen (bundle exec jekyll build)"
	@echo "  make serve     – Lokaler Server mit Live-Reload (http://localhost:4000)"
	@echo "  make clean     – Build-Artefakte löschen (_site, .jekyll-cache)"

# Abhängigkeiten installieren
install:
	bundle install

# Statische Site erzeugen
build:
	bundle exec jekyll build

# Entwicklungsserver mit Live-Reload
serve:
	bundle exec jekyll serve --livereload

# Build-Artefakte entfernen
clean:
	bundle exec jekyll clean
