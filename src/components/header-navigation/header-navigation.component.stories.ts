import { Meta, Story, componentWrapperDecorator, moduleMetadata } from '@storybook/angular/';
import { RouterTestingModule  } from '@angular/router/testing';
import { HeaderNavigationComponent } from './header-navigation.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/HeaderNavigation',
  component: HeaderNavigationComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderNavigationComponent],
      imports: [RouterTestingModule ],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div style="margin: 1em">${story}</div>`),
  ],
  argTypes: {
    title:{
      control: {
        type: 'text'
      }
    },
    anchors: {
      control: {
        type: 'array'
      }
    }
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props: {
    title: 'Table of Contents',
    anchors: [
      {
        title: 'Anchor 1',
        href: 'anchor1',
        classes: 'anchor-class',
        prefixLabel: '',
        label: 'Anchor 1'
      }, {
        title: 'Anchor 1',
        href: 'anchor2',
        classes: 'anchor-class',
        prefixLabel: '001',
        label: 'Anchor 2'
      }, { 
        title: 'Anchor 1',
        href: 'anchor3',
        classes: 'active',
        prefixLabel: '',
        label: 'Anchor 3'
      },
    ],
  },
  template: `
    <vz-header-navigation title="Hi" anchors="anchors" />
  `,
});

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  title: 'In this section',
  anchors: [
    {
      title: 'Anchor 1',
      href: 'anchor1',
      classes: 'anchor-class',
      prefixLabel: '',
      label: 'Anchor 1'
    }, {
      title: 'Anchor 1',
      href: 'anchor2',
      classes: 'anchor-class',
      prefixLabel: '001',
      label: 'Anchor 2'
    }, { 
      title: 'Anchor 1',
      href: 'anchor3',
      classes: 'active',
      prefixLabel: '',
      label: 'Anchor 3'
    },
  ]
};