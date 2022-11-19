import React from 'react';
import { TermsOfUse } from './TermsOfUse';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/TermsOfUse',
  component: TermsOfUse,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div>
    <h1>Terms of Use</h1>
    <p>The terms and conditions set forth the conditions, clauses, terms and requirements related to using the platform.</p>
  <h2>Requirements:</h2>
  <p>You must be at least 14 years old to access or use the platform, including without limitation to complete a DevAsk account registration. By accessing or using the Services or the Network in any manner, you represent and warrant that you are at least 14 years of age. If you are under 14 years old, you may not, under any circumstances or for any reason, access or use the Services or Network in any manner, and may not provide any personal information to or on the Services or Network (including, for example, a name, address, telephone number or email address).
</p>
<h2>Rules:</h2>
<ul><li>Avoid the use of discriminatory or abusive languages as such could lead to immediate deactivation of your account.</li>
<li>Any form of fraud or illegal activities are frown upon in the community and will lead to immediate deactivation if found guilty.</li></ul>
<h2>Account Deactivation:</h2>
<p>Disregard for any of the stated terms will lead to deactivation. Account reactivation can be processed on contact with our customer care depending on the severity of offence.</p>
<h2>Copyright information:</h2>
<p>If you believe that content residing or accessible on the Network infringes a copyright, please send a notice of copyright infringement to any of our customer care agents.
</p>
<h2>Billing and Subscription:</h2>
<p>Check Pricing page</p>
<p>Last Update: 15th November, 2022</p>

</div>
);

{/* <div {...args} />; */}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
};

export const LargeScreen = Template.bind({});
LargeScreen.args = {
  size: 'large',
  label: 'Button',
};

export const SmallScreen = Template.bind({});
SmallScreen.args = {
  size: 'small',
  label: 'Button',
};
