const PurchaseApiUtil = {
  createPurchase: function(data, success) {
    $.ajax({
      url: 'api/purchases',
      type: 'POST',
      data: { purchase: data },
      success
    });
  },

  editPurchase: function(id, data, success) {
    $.ajax({
      url: `api/purchases/${id}`,
      type: 'PATCH',
      data: { purchase: data },
      success
    });
  },

  deletePurchase: function(id, success) {
    $.ajax({
      url: `api/purchases/${id}`,
      type: 'DELETE',
      success
    });
  }
};

module.exports = PurchaseApiUtil;
