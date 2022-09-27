# @fransvilhelm/mjml-react

This is a port of the email templating framework [`mjml`](https://mjml.io/) to React. This port is inspired by
[`mjml-react`](https://github.com/wix-incubator/mjml-react) from `wix-incubator`, but with a few differences.

## Installation

Install `@fransvilhelm/mjml-react` together with its peer dependencies; `mjml`, `react` and `react-dom`:

```bash
$ npm i @fransvilhelm/mjml-react mjml react react-dom
$ yarn add @fransvilhelm/mjml-react mjml react react-dom
```

## Usage

### Rendering

This package can be used in different ways, for example to generate email templates and static emails as part of a build
step, or on a server accepting a payload that can be sent as props and render the emails upon request.

Example of rendering emails on demand:

```tsx
import { render } from '@fransvilhelm/mjml-react';

import { templates } from './templates';

export function requestHandler(req, res) {
  let { template, user } = req.body;
  let Template = templates[template];

  if (Template == null) return res.send(404, `Template ${template} was not found`);

  let { html } = render(<Template user={user} />);

  res.setHeader('Content-Type', 'text/html');
  return res.send(200, html);
}
```

Example of rendering a set of static emails:

```tsx
import * as fs from 'node:fs';

import { render } from '@fransvilhelm/mjml-react';

import { Goodbye, Welcome } from './templates';

export function renderEmails() {
  let emails = [
    { Template: Goodbye, path: 'goodbye.html' },
    { Template: Welcome, path: 'welcome.html' },
  ];

  for (let { Template, path } of emails) {
    let { html } = render(<Template />);
    fs.writeFileSync(path, html);
  }
}
```

### Templates

Templates are authored as React components. All tags exposed by `mjml` are supported by this package.

Mjml tags are exported from this package and renamed as UpperCamelCase (`mjml` → `Mjml`, `mj-text` → `MjText`).

```tsx
import { MjBody, MjColumn, MjHead, MjSection, MjText, MjTitle, Mjml, render } from '@fransvilhelm/mjml-react';

export const Template: React.FC = () => {
  return (
    <Mjml>
      <MjHead>
        <MjTitle>Welcome!</MjTitle>
      </MjHead>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText>Hello world!</MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>
  );
};

let { html } = render(<Template />);
console.log(html);
```

## Api

For more information on how to use mjml tags, where they should be rendered or what they output, you should read more in
the official [Mjml documentation](https://documentation.mjml.io/).

Below you will find documentation around `render`, special case tags and some extensions/add-ons exposed by this
package.

### `render`

`render` is used to render an Mjml+React template into a string. It accepts a React element as it's first argument, and
an optional options object as the second argument:

**Signature:**

```ts
type RenderOptions = {
  fonts?: Record<string, string>;
  validationLevel?: 'skip' | 'strict' | 'soft';
};

function render(
  element: React.ReactElement,
  options?: RenderOptions,
): {
  html: string;
  errors: MJMLParseError[];
};
```

**Options:**

| Key               | Optional | Type                           | Default value                                                                                 | Description                                                                                                                                                                                                                                              |
| :---------------- | :------- | :----------------------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validationLevel` | `true`   | `'skip' \| 'strict' \| 'soft'` | `'strict'`                                                                                    | By default mjml will validate the input and throw an error if there are any violations. Use `soft` to prevent throwing an error, you can read the warnings from the `errors` prop returned. Use `skip` to fully skip validation.                         |
| `fonts`           | `true`   | `Record<string, string>`       | [See source](https://github.com/mjmlio/mjml/blob/master/packages/mjml-core/src/index.js#L100) | Default fonts injected into the generated html. Note that the fonts also has to be referenced by name somewhere in your templates to actually be included. The keys are the name of the fonts (e.g. Roboto) and the value is the url to use for imports. |

**Example:**

```tsx
let { html, errors } = render(<Template />, { validationLevel: 'soft' });
```
