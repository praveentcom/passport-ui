import { KeyRound } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Input OTP",
  icon: KeyRound,
  description: "A specialized input field for one-time passwords.",
  category: "components",
  storyId: "components-input-otp--default",
  slug: "input-otp",
  importCode: `import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "passport-ui";
import { Label } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <div className="meta-container">
    <Label>Verification Code</Label>
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  </div>
</div>

{/* Simple 4-digit PIN */}
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`,
};
