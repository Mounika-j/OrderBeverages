const options = [
    { value: 'black_choclate', label: 'Chocolate' },
    { value: 'Earl Grey', label: 'Earl Grey' },
    { value: 'Lemon', label: 'Lemon' },
    { value: 'Cinnamon', label: 'Cinnamon' },
    { value: 'Ginger', label: 'Ginger' },
    { value: 'Mint', label: 'Mint' },
    { value: 'Apple', label: 'Apple' },
    { value: 'Blackcurrant', label: 'Blackcurrant' },
    { value: 'Vanilla', label: 'Vanilla' },
    { value: 'Cherry', label: 'Cherry' },
    { value: 'Jasmine', label: 'Jasmine' },
    { value: 'Green', label: 'Green' },
  ];
const options_map = options.reduce(function(map, obj) {
    map[obj.value] = obj.label;
    return map;
}, {});
export {options, options_map}
    