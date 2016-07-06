const PurchaseApiUtil = {
  createPurchase: function(data, success) {
    $.ajax({
      url: 'api/purchase',
      type: 'POST',
      data: { purchase: data },
      success
    });
  },

  deletePurchase: function(data, success) {
    $.ajax({
      url: 'api/purchase',
      type: 'DELETE',
      data: { purchase: data },
      success
    });
  }
};

module.exports = PurchaseApiUtil;
