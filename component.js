export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.arg1 = this.document.getElementById("arg1");
    this.arg2 = this.document.getElementById("arg2");
    this.initPromise = this.init();
  }

  async init() {
    await uiBuilder.ready(this.arg1);
    await uiBuilder.ready(this.arg2);
    await this.arg1.component.inputDefinition({
      type: "text",
      name: "Key",
      placeholder: "Key",
    });

    await this.arg2.component.inputDefinition({
      type: "unify",
      name: "JSON",
      evaluate: true,
    });
  }

  setConfig(config) {
    this.config = config;
  }

  async setValue(value) {
    await this.initPromise;
    await this.arg1.component.setValue(value.key);
    await this.arg2.component.setValue(value.json);
  }

  async getValue() {
    return {
      evaluate: true,
      key: await this.arg1.component.getValue(),
      json: await this.arg2.component.getValue(),
      type: "json_value",
    };
  }
}
