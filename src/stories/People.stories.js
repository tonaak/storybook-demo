import React from 'react';

import People from "../components/People";

export default {
    title: 'People',
    component: People,
};

const Template = (args) => <People {...args} />;

export const example = Template.bind({});
example.args = {
    imgUrl: 'http://www.sfu.ca/~cqt/IAT352/a4/img/avatars/test-user.png',
    children: 'nickname'
};