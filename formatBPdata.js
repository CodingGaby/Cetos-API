const formatBPData = (data) => {
    return {
      Code: data.Code,
      Name: data.Name,
      ForeignName:  data.ForeignName,
      Group: data.Group,
      Currency: data.Currency,
      FederalTaxID: data.FederalTaxID,
      Contact: {
        Tel1: data.Tel1,
        Tel2: data.Tel2,
        MobilePhone: data.MobilePhone,
        Fax: data.Fax,
        EMail: data.EMail
      },
      WebSite: data.WebSite,
      ShippingType: data.ShippingType,
      Password: data.Password,
      FactoringIndicator: data.FactoringIndicator,
      BusinessPartnerProject: data.BusinessPartnerProject,
      Industry: data.Industry,
      TypeOfBusiness: data.TypeOfBusiness,
      AliasName: data.AliasName
    };
  };
  
  export default formatBPData;
  