const useFormData = (obj, removeFalsyValue = true) => {
  var formData = new FormData();
  const newObj = {};

  if (removeFalsyValue) {
    for (keys in obj) {
      if (obj[keys]) {
        newObj[keys] = obj[keys];
      }
    }
  }

  for (const property in removeFalsyValue ? newObj : obj) {
    const formKey = property;
    const formKeyValue = removeFalsyValue ? newObj[property] : obj[property];
    /**
     * if the property is an object, but not a File.
     * use recursivity.
     * if it's a file add it
     * else
     * add the normal key
     */
    if (typeof formKeyValue === "object" && !(formKeyValue instanceof File)) {
      formData.append(formKey, JSON.stringify(formKeyValue));
    } else if (formKeyValue instanceof File) {
      formData.append(formKey, formKeyValue);
    } else {
      // if it's a string
      formData.append(formKey, formKeyValue);
    }
  }
  return formData;
};

