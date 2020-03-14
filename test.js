let lstData = require('./repository/data')
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = lstData.filter(word => word.first_name === 'Elizabeth'  );

console.log(result);