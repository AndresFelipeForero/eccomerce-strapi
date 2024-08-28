module.exports = {
    beforeCreate(event) {
      const { data } = event.params;
  
      data.finalPrice = data.price * (1 - data.discount/100);
    },
  
    beforeUpdate(event) {
      const { data } = event.params;

      data.finalPrice = data.price * (1 - data.discount/100);
    },
};