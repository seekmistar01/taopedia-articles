import test from "node:test";
import assert from "node:assert/strict";

import { validateTags, validateTextField, validateSlug } from "./validate-content.mjs";

const FILE = "content/pages/example/index.mdx";

test("validateTags accepts up to three distinct tags", () => {
  assert.doesNotThrow(() => validateTags({ tags: ["Subnets", "Mining", "TAO"] }, FILE));
});

test("validateTags rejects an exact duplicate tag", () => {
  assert.throws(() => validateTags({ tags: ["Subnet", "Subnet"] }, FILE), /duplicate tag "Subnet"/);
});

test("validateTags rejects a case-insensitive duplicate tag", () => {
  assert.throws(() => validateTags({ tags: ["Subnet", "subnet"] }, FILE), /duplicate tag/);
});

test("validateTags rejects a whitespace-insensitive duplicate tag", () => {
  assert.throws(() => validateTags({ tags: [" Subnet ", "subnet"] }, FILE), /duplicate tag/);
});

test("validateTags still rejects more than three tags", () => {
  assert.throws(() => validateTags({ tags: ["a", "b", "c", "d"] }, FILE), /at most 3 tags/);
});

test("validateTags still rejects the reserved Bittensor tag", () => {
  assert.throws(() => validateTags({ tags: ["Bittensor"] }, FILE), /do not use "Bittensor"/);
});

test("validateTextField rejects a missing value", () => {
  assert.throws(() => validateTextField({}, "title", FILE, 120), /is required/);
});

test("validateTextField enforces the maximum length", () => {
  assert.throws(
    () => validateTextField({ title: "x".repeat(200) }, "title", FILE, 120),
    /characters or fewer/
  );
});

test("validateSlug rejects an unsafe slug", () => {
  assert.throws(() => validateSlug("Bad Slug"), /Unsafe article slug/);
});

test("validateSlug accepts a valid slug", () => {
  assert.doesNotThrow(() => validateSlug("dynamic_tao"));
});
