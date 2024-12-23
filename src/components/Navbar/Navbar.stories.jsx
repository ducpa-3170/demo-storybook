import Navbar from './Navbar';

const textColor = '#0050FF';
const bgColor = '#EAEDF7';

export default {
  component: Navbar,
  title: 'Components/Navbar',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

};

export const Default = {

};

// export const Hover = {
//   args: {
//     textColor: Default.args.textColor,
//     bgColor: Default.args.bgColor
//   },
// };