import React from 'react';
import ExamplesPage from 'components/ExamplesPage';

import description from '../description';
import OrientationExamples from './OrientationExamples';
import OrientationExamplesRaw from '!!raw-loader!./OrientationExamples.jsx';
import InlineExample from './InlineExample';
import InlineExampleRaw from '!!raw-loader!./InlineExample.jsx';
import Formatting from './Formatting';
import FormattingRaw from '!!raw-loader!./Formatting.jsx';
import AutoOkAndRangeExamples from './AutoOkAndRangeExamples';
import AutoOkAndRangeExamplesRaw from '!!raw-loader!./AutoOkAndRangeExamples.jsx';
import TextFieldStyling from './TextFieldStyling';
import TextFieldStylingRaw from '!!raw-loader!./TextFieldStyling.jsx';
import Controlled from './Controlled';
import ControlledRaw from '!!raw-loader!./Controlled.jsx';

const examples = [{
  title: 'Orientation Examples',
  description: `
Date pickers will attempt to follow the correct display mode of the current
screen size through the media queries. You can also force a display mode if
you want.

> Forcing a display mode is not enabled by default since it is recommended to
always allow the orientation to determine the display mode. However it can be
enabled by setting \`$md-picker-include-forceful-classes: true\`.
`,
  code: OrientationExamplesRaw,
  children: <OrientationExamples />,
}, {
  title: 'Inline Example',
  description: `
When the user is primarily using a desktop display, it might be better to display
an inline picker instead of opening a full dialog. This can be accomplished by
providing the \`inline\` prop to the picker.
  `,
  code: InlineExampleRaw,
  children: <InlineExample />,
}, {
  title: 'Formatting',
  description: `
As stated above, the date and time formatting is done with the \`Intl.DateTimeFormat\`
formatter. The examples below will show the default formatting differences between:
- the browser's locale
- an en-US locale
- a da-DK locale

The \`DatePicker\` can also be updated with any of the
[configuration options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters)
  `,
  code: FormattingRaw,
  children: <Formatting />,
}, {
  title: 'Auto OK and Min/Max Dates',
  description: `
The \`DatePicker\` can be updated so that when a user touches/clicks a date, it will automatically do the "OK" action
of selecting the date and closing the dialog.

In addition, you can specify a min and max date for the picker to display. The user can navigate through the months like
normal until the min or max date is reached. The invalid dates will be disabled and dulled to prevent selection as well
as preventing the user from seeing any other months that are past the min or max dates.
  `,
  code: AutoOkAndRangeExamplesRaw,
  children: <AutoOkAndRangeExamples />,
}, {
  title: 'Text Field Styling',
  description: `
Since the \`DatePicker\` uses the \`TextField\` component behind the scenes, the \`DatePicker\` will pass most of the text field
props to the \`TextField\` itself so you can add error messages, help text, line directions, etc to the \`DatePicker\`.
  `,
  code: TextFieldStylingRaw,
  children: <TextFieldStyling />,
}, {
  title: 'Controlled',
  description: `
There are times where it is helpful to fully control all aspects of the \`DatePicker\` (\`visibility\`, \`value\`). This can be done by
providing the \`value\` prop and an \`onChange\` prop or \`visible\` with \`onVisibilityChange\`.
  `,
  code: ControlledRaw,
  children: <Controlled />,
}];

const DatePickers = () => <ExamplesPage description={description} examples={examples} />;
export default DatePickers;
