export function buildOperationUrl(record, opPath, urlType, instance=true) {
  let modelName = record.constructor.modelName || record.constructor.typeKey;
  let adapter = record.store.adapterFor(modelName);
  let path = opPath;
  let snapshot = record._createSnapshot();
  let baseUrl = adapter.buildURL(modelName, instance ? record.get('id') : null, snapshot, urlType);

  if (path) {
    return _joinUrl(baseUrl, path);
  } else {
    return baseUrl;
  }
}

function _joinUrl(baseUrl, path) {
  if (baseUrl.charAt(baseUrl.length - 1) === '/') {
    return `${baseUrl}${path}`;
  } else {
    return `${baseUrl}/${path}`;
  }
}

export default buildOperationUrl;
