"use client";

import { useState, useEffect, useRef } from "react";
import { EmojiButton } from "@joeattardi/emoji-button";
import { Smile } from "lucide-react";

interface EmotePickerProps {
  onSelect: (emote: string) => void;
}

export default function EmotePicker({ onSelect }: EmotePickerProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [picker, setPicker] = useState<any>(null);

  useEffect(() => {
    const emojiPicker = new EmojiButton({
      position: "top-end",
      theme: "dark",
      zIndex: 9999,
      emojis: [
        {
          name: "Kappa",
          emoji:
            '<img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" alt="Kappa" />',
        },
        {
          name: "PogChamp",
          emoji:
            '<img src="https://static-cdn.jtvnw.net/emoticons/v1/88/1.0" alt="PogChamp" />',
        },
      ],
      showPreview: false,
      showSearch: false,
      autoHide: false,
      i18n: {
        categories: {
          custom: "Twitch Emotes",
        },
      },
    });

    emojiPicker.on("emoji", (selection: any) => {
      onSelect(selection.emoji);
    });

    setPicker(emojiPicker);
  }, [onSelect]);

  const openPicker = () => {
    if (picker && triggerRef.current) {
      picker.togglePicker(triggerRef.current);
    }
  };

  return (
    <div
      ref={triggerRef}
      onClick={openPicker}
      className="flex items-center justify-center cursor-pointer"
      role="button"
      tabIndex={0}
    >
      <Smile className="w-4 h-4" />
    </div>
  );
}
