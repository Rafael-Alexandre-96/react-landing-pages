import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Heading } from './index';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading $colordark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render small size', () => {
    renderTheme(<Heading size='small'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render medium size', () => {
    renderTheme(<Heading size='medium'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('should render big size', () => {
    renderTheme(<Heading size='big'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should render huge size', () => {
    renderTheme(<Heading size='huge'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    console.log('CODE THIS!!! - <Heading /> should render correct font-size when using mobile');
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading $uppercase={true}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto'});
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
