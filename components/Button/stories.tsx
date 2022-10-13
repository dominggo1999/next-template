import Button from '.';

type ButtonControls = {
  text: string
  size: 'sm' | 'md' | 'lg' | 'xl'
}

export const Default = ({ text, size }: ButtonControls) => {
  return (
    <>
      <p>Default</p>
      <Button size={size}>{text}</Button>
    </>
  );
};

Default.args = {
  text: 'Hello World',
  size: 'md',
};

Default.argTypes = {
  size: {
    options: ['sm', 'md', 'lg', 'xl'],
    control: { type: 'select' },
    defaultValue: 'md',
  },
};
