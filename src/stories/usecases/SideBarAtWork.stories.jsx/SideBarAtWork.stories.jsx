import React from 'react';

import { Sidebar } from '../../components/sidebar/Sidebar';
import {FullScreenImg} from "../../components/fullScreenImg/FullScreenImg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'usecases/SideBarAtWork',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <>
  <FullScreenImg src={'https://picsum.photos/1200'} value={'Inspiring quote'}/>
  <Sidebar {...args}/>
  <FullScreenImg src={'https://picsum.photos/1199'} value={'Wouter did not see this diss coming'}/>
</>

export const Default = Template.bind();
Default.args = {
  displayLeft: true
};
