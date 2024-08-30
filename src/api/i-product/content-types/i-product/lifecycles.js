module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    // Validar que price y discount existen y son números válidos
    if (typeof data.price === 'number' && typeof data.discount === 'number') {
      data.finalPrice = data.price * (1 - data.discount / 100);
    } else {
      console.error('Error en beforeCreate: price o discount no son válidos');
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    // Validar que price y discount existen y son números válidos
    if (typeof data.price === 'number' && typeof data.discount === 'number') {
      data.finalPrice = data.price * (1 - data.discount / 100);
    } else {
      console.error('Error en beforeUpdate: price o discount no son válidos');
    }
  },
};
