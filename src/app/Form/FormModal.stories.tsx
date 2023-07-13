import { Meta, StoryObj } from "@storybook/react";
import FormModal from "./FormModal";

const meta: Meta<typeof FormModal> = {
  title: "From/modal", // コンポーネントのタイトル(任意)
  component: FormModal, // 実際に使用するコンポーネント（上でimportしたもの）
};

export default meta;
type Story = StoryObj<typeof FormModal>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "FormModal",
  },
};
