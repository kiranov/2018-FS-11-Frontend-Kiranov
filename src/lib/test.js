/* eslint-env browser */
const say = function (name) {
  const d = document.createElement('div');
  d.innerHTML = `Hello ${name}`;
  document.body.appendChild(d);
  d.setAttribute('class', 'div_one');
  return `Hello ${name}`;
};
export default say;
