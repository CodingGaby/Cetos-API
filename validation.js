import joi from joi;

export const bpSchema = Joi.object({
    Code: Joi.string().required(),
    Name: Joi.string().min(3).max(100).required(),
    ForeignName: Joi.string().optional().allow(null),
    Group: Joi.string().optional().allow(null),
    Currency: Joi.string().length(3).required(),
    FederalTaxID: Joi.string().optional().allow(null),
    Contact: Joi.object({
      Tel1: Joi.string().pattern(/^[0-9]{10,15}$/).optional().allow(null),
      Tel2: Joi.string().pattern(/^[0-9]{10,15}$/).optional().allow(null),
      MobilePhone: Joi.string().pattern(/^[0-9]{10,15}$/).optional().allow(null),
      Fax: Joi.string().optional().allow(null),
      EMail: Joi.string().email().optional().allow(null)
    }).optional().allow(null),
    WebSite: Joi.string().uri().optional().allow(null),
    ShippingType: Joi.string().optional().allow(null),
    Password: Joi.string().min(8).optional().allow(null),
    FactoringIndicator: Joi.string().optional().allow(null),
    BusinessPartnerProject: Joi.string().optional().allow(null),
    Industry: Joi.string().optional().allow(null),
    TypeOfBusiness: Joi.string().optional().allow(null),
    AliasName: Joi.string().optional().allow(null)
  });


export const validateAndFormatBP = (data) => {
    const { error, value } = bpSchema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
    return formatBPData(value);
  };