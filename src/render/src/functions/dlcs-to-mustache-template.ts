const dlcsToMustacheTemplate = (dlcs: Record<string, string>) => {
  const out = [];
  for (const key in dlcs) {
    if (Object.prototype.hasOwnProperty.call(dlcs, key)) {
      out.push(key + '=' + dlcs[key]);
    }
  }

  return out.join('\n');
};

export default dlcsToMustacheTemplate;
