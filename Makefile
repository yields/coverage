
ejs= node scripts/ejs.js

build: node_modules components index.js ui.js
	@component build --dev

components: component.json
	@component install --dev

./node_modules:
	@npm install stdin ejs

ui.js: ui.ejs
	@$(ejs) < $< > $@

clean:
	rm -fr build components ui.js

example: build
	@open example/index.html

.PHONY: clean example
