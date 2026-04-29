import React from "react";
import { StyledButton, StyledLink } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", fullWidth, children } = props;

  if ("href" in props && props.href) {
    return (
      <StyledLink
        href={props.href}
        $variant={variant}
        $fullWidth={fullWidth}
        data-variant={variant}
      >
        {children}
      </StyledLink>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <StyledButton
      {...buttonProps}
      $variant={variant}
      $fullWidth={fullWidth}
      data-variant={variant}
    >
      {children}
    </StyledButton>
  );
}
