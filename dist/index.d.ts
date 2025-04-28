import { JSX } from 'react';

export interface PrebookedProps {
  user_id: string;
  primaryColor?: string;
  primaryColorLight?: string;
  secondaryColor?: string;
  secondaryColorLight?: string;
  warningColor?: string;
  grayColor?: string;
  fontName?: string;
  fontColor?: string;
  lightBgColor?: string;
  lighterBgColor?: string;
  globalBgColor?: string;
  menuNames?: string[];
  tripInstruction?: string;
  tripNote?: string;
  borderColor?: string;
  conversationNote?: string;
  inputPadding?: string;
  messengerEnquiryItemWidth?: string;
  messengerDesktopHeight?: string;
  messengerMobileHeight?: string;
  messengerConversationHeight?: string;

  // Scrollbar Styles
  scrollbarWidth?: string;
  scrollbarHeight?: string;
  scrollbarTrackColor?: string;
  scrollbarThumbColor?: string;
  scrollbarThumbHoverColor?: string;
  scrollbarBorderRadius?: string;
}

export declare const Prebooked: (props: PrebookedProps) => JSX.Element;
