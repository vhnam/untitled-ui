import type { Preview } from '@storybook/react';
import React from 'react';
import { DocsContainer } from '@storybook/blocks';

import '@repo/ui/styles.css';

const preview: Preview = {
  // decorators: [
  //   (Story) => (
  //     <div>
  //       <Story />
  //     </div>
  //   ),
  // ],
  parameters: {
    // docs: {
    //   container: ({ children, context }) => (
    //     <DocsContainer context={context}>
    //       {/* <Unstyled> */}
    //         <div className="sb-u">{children}</div>
    //       {/* </Unstyled> */}
    //     </DocsContainer>
    //   ),
    // },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Foundations',
          [
            'Border Width',
            'Colors',
            'Elevation',
            'Icons',
            ['Overview', 'Icons', '*'],
            '*',
          ],
          'Semantics',
          'Components',
        ],
      },
    },
  },
};

export default preview;
