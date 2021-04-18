# React Date Select

# WORK IN PROGRESS

[![npm](https://img.shields.io/npm/v/react-day-select.svg)](https://www.npmjs.com/package/react-day-select) ![downloads](https://img.shields.io/npm/dt/react-day-select.svg)

A simple and reusable Datepicker component for React [(Demo)](https://parceljs.org)

## Installation

The package can be installed via npm:

```bash
npm i react-day-select --save
```

Or via yarn:

```bash
yarn add react-day-select
```

## Usage

Here's an example of basic usage:

```bash
import React, { useState } from 'react';
import DatePicker from 'react-day-select';

function MyDatePicker() {

  return (
    <div>
      <DatePicker
        bgColor='#435EBE'
        onChange={(e)=>console.log(e)}
        format="MM-DD-YYYY"
      />
    </div>
  );
}

```

| Prop name | Description                                | Default value  | Example values                   |
| --------- | ------------------------------------------ | -------------- | -------------------------------- |
| bgColor   | background color of head possition         | #2b7479        | 'red, 'green', '#2b7479' etc.    |
| onChange  | Tigger when a day is selecte requird Field | requird Field  | requird Field                    |
| format    | format of the output                       | August 05 1993 | MM-DD-YYYY mm-dd-yyyy DD-MM-YYYY |
|           |                                            |                |                                  |

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://avatars.githubusercontent.com/u/38469058?v=4." width="100">
    </td>
    <td>
      Justin Joseph<br />
      <a href="mailto:mailtojustinj@gmail.com">mailtojustinj@gmail.com</a><br />
      <a href="https://justinjj16.github.io/justinjoseph/home">https://justinjj16.github.io/justinjoseph/home</a>
    </td>
  </tr>
</table>

## Thank you

Thank you to all [Please save Water and River](https://parceljs.org)

[]()

### Water, water everywhere but not a drop to drink.

### A drop of water is worth more than a sack of gold to a thirsty man.
