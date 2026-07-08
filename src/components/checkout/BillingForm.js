import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/Textarea";

export default function BillingForm({
  billSame,
  onToggleBillSame,
  values,
  onChange,
  email,
  onEmailChange,
  emailError,
  notes,
  onNotesChange,
}) {
  function handleChange(field) {
    return (event) => onChange(field, event.target.value);
  }

  return (
    <div className="rounded-lg border border-line bg-cream-100 p-[26px]">
      <h2 className="mb-[18px] text-[1.15rem] text-cocoa-950">Billing details</h2>

      <label className="mb-4 flex items-center gap-2.5 text-[0.9rem] text-ink-soft">
        <input
          type="checkbox"
          checked={billSame}
          onChange={(event) => onToggleBillSame(event.target.checked)}
          className="w-auto"
        />
        Same as shipping / pickup contact
      </label>

      {!billSame ? (
        <div className="mb-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              id="bFirst"
              label="First name"
              value={values.bFirst}
              onChange={handleChange("bFirst")}
            />
            <Input
              id="bLast"
              label="Last name"
              value={values.bLast}
              onChange={handleChange("bLast")}
            />
          </div>
          <Input
            id="bStreet"
            label="Billing address"
            value={values.bStreet}
            onChange={handleChange("bStreet")}
            wrapperClassName="mt-4"
          />
        </div>
      ) : null}

      <Input
        id="cEmail2"
        label="Email address"
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(event) => onEmailChange(event.target.value)}
        error={emailError}
      />

      <Textarea
        id="orderNotes"
        label="Order notes (optional)"
        placeholder="Delivery instructions, gift note, etc."
        value={notes}
        onChange={(event) => onNotesChange(event.target.value)}
        wrapperClassName="mt-4"
      />
    </div>
  );
}
