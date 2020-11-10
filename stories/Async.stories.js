import React, {useState} from 'react';
import Controls from '../comps/Controls';
import ItemCart from '../comps/ItemCart'; 

export default {
  title: "Example/AsyncExampleComps",
  component: Controls
};

export const BasicControls = () => <Controls/>;
export const BasicItemCart = () => <ItemCart/>;
