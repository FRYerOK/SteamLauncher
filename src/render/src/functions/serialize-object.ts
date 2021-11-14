const serializeObject = ($form: JQuery<Element>) => {
  const serialize = $form.serializeArray();
  const object: Record<string, unknown> = {};

  for (const {name, value} of serialize) {
    let newValue: string | boolean = value;

    if (value === 'true' || value === 'false') {
      newValue = value === 'true';
    }

    object[name] = newValue;
  }

  return object;
};

export default serializeObject;
