const setting = [
  // import
  {
    name: 'import prop-types',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp: '^(i\\.)(prop - types|PropTypes);?$',
    global: true, // global
    replace: "import PropTypes from 'prop-types';",
  },
  {
    name: 'import 3',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // i.@contexts/SourceCode.useSourceCode,
    regexp: '^(?=.*,)(i\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import { $3 } from '\\Trim$2';",
  },
  {
    name: 'import 4',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // i.@contexts/SourceCode.useSourceCode
    regexp: '^(i\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import $3 from '\\Trim$2';",
  },
  {
    name: 'import 5',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // i.@components/Display
    regexp: '(^i\\.)(.*)/([^;\n]*);?$',
    global: true, // global
    replace: "import $3 from '$2/$3';",
  },
  {
    name: 'import 4',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // i.@components/Display.Display.show,
    regexp: '^(?=.*,)(i\\.)(.*)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import $3, { $4 } from '$2';",
  },
  {
    name: 'import 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // i.prop-types.PropTypes
    regexp: '(^i\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import $3 from '\\Trim$2';",
  },
  {
    name: 'import 1',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // i.clsx
    regexp: '(^i\\.)([^;\n]*);?$',
    global: true, // global
    replace: "import $2 from '$2';",
  },
  {
    name: 'react',
    match: '\\.(js|ts|mdx|jsx)?$', // html
    regexp: '(^(react|React));?$',
    global: true, // global
    replace: "import React from 'react';",
  },
  {
    name: 'react sub',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp: '(^react\\.)([^;\n]*);?$',
    global: true, // global
    replace: "import React, { $2 } from 'react';",
  },
  {
    name: 'material styles',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp: '(^m\\.)(styles)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import { $3 } from '@material-ui/core/styles';",
  },
  {
    name: 'add material color',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp: '(^m\\.)(colors?)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import $3 from '@material-ui/core/colors/$3';",
  },
  {
    name: 'add material icon 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // m.icon.Circle.One
    regexp: '(^m\\.)icon\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import $3Icon from '@material-ui/icons/$2';",
  },
  {
    name: 'add material icon',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // m.icon.Circle
    regexp: '(^m\\.)icon\\.([^;\n]*);?$',
    global: true, // global
    replace: "import $2Icon from '@material-ui/icons/$2';",
  },
  {
    name: 'add material lab component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp:
      '^(m\\.)(Alert|Autocomplete|Pagination|PaginationItem|Rating|Skeleton|SpeedDial|SpeedDialIcon|SpeedDialAction|Timeline|TimelineItem|TimelineSeparator|TimelineConnector|TimelineContent|TimelineDot|TimelineOppositeContent|ToggleButton|ToggleButtonGroup|TreeView|TreeItem)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import $2, { $3 } from '@material-ui/lab/$2';",
  },
  {
    name: 'add material lab component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp:
      '(^m\\.)(Alert|Autocomplete|Pagination|PaginationItem|Rating|Skeleton|SpeedDial|SpeedDialIcon|SpeedDialAction|Timeline|TimelineItem|TimelineSeparator|TimelineConnector|TimelineContent|TimelineDot|TimelineOppositeContent|ToggleButton|ToggleButtonGroup|TreeView|TreeItem);?$',
    global: true, // global
    replace: "import $2 from '@material-ui/lab/$2';",
  },
  {
    name: 'add material component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp: '^(m\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "import { $3 } from '@material-ui/$2';",
  },
  {
    name: 'add material component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    regexp: '(^m\\.)([^;\n]*);?$',
    global: true, // global
    replace: "import $2 from '@material-ui/core/$2';",
  },

  // const
  {
    name: 'const icon',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.icon.person.person-outline
    regexp: '(^c\\.)(icon\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      "const \\U$3Icon = (props: any) => pug`Icon(...props name='\\Trim$4')`;",
    ],
  },
  {
    name: 'const icon',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.icon.person
    regexp: '(^c\\.)(icon\\.)([^;\n]*);?$',
    global: true, // global
    replace: [
      "const \\U$3Icon = (props: any) => pug`Icon(...props name='$3')`;",
    ],
  },
  {
    name: 'const redux 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.action.todos.change_input
    regexp: '(^c\\.)(action\\.)(.*)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      "const \\AU$4 = '$3/\\AU$4';",
      'export const $4 = createAction(\\AU$4, ($5) => $5);',
    ],
  },
  {
    name: 'const redux',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.action.todos.change_input
    regexp: '(^c\\.)(action\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      "const \\AU$4 = '$3/\\AU$4';",
      'export const $4 = createAction(\\AU$4, () => {});',
    ],
  },
  {
    name: 'const pug',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.pug.test
    regexp: '^([ ]*)c\\.(pug\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = pug`', '$1`;'],
  },
  {
    name: 'const material withStyles theme component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.withStyles.to.from
    regexp: '(^c\\.)(withStyles\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      'const $3 = withStyles((theme) => ({',
      '  root: {',
      '',
      '  }',
      '}))($4);',
    ],
  },
  {
    name: 'const material useStyles',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.makeStyles.useStyles
    regexp: '(^c\\.)(makeStyles\\.)([^;\n]*);?$',
    global: true, // global
    replace: [
      'const $3 = makeStyles((theme) => ({',
      '  root: {',
      '',
      '  }',
      '}));',
    ],
  },
  {
    name: 'const material forwardRef',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.forwardRef.test
    regexp: '^([ ]*)c\\.(forwardRef\\.)([^;\n]*);?$',
    global: true, // global
    replace: [
      '$1const $3 = forwardRef((props, ref) => {',
      '$1  return pug`',
      '$1  `;',
      '});',
    ],
  },
  {
    name: 'react useEffect',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useEffect.params
    regexp: '^([ ]*)c\\.(useEffect)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1useEffect(() => {', '$1', '$1}, [$3]);'],
  },
  {
    name: 'react useEffect',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useEffect
    regexp: '^([ ]*)c\\.(useEffect);?$',
    global: true, // global
    replace: ['$1useEffect(() => {', '', '$1}, []);'],
  },
  {
    name: 'react useMemo',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useMemo.test.params
    regexp: '^([ ]*)c\\.(useMemo)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = useMemo(() => {', '', '$1}, [$4])'],
  },
  {
    name: 'react useMemo',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useMemo.test
    regexp: '^([ ]*)c\\.(useMemo)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = useMemo(() => {', '', '$1}, [])'],
  },
  {
    name: 'react useRef',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useRef.test.params
    regexp: '^([ ]*)c\\.(useRef)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = useRef($4);',
  },
  {
    name: 'react useRef',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useRef.test
    regexp: '^([ ]*)c\\.(useRef)\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = useRef();',
  },
  {
    name: 'const recoil atom',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.atom.userState.{}
    regexp: '^([ ]*)e\\.c\\.(atom)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      'export const $3State = $2({',
      "  key: '$3State',",
      '  default: $4,',
      '});',
    ],
  },
  {
    name: 'const recoil selector',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.selector.userState
    regexp: '^([ ]*)e\\.c\\.(selector)\\.([^;\n]*)(Query|Mutation);?$',
    global: true, // global
    replace: [
      'export const $3$4 = $2({',
      "  key: '$3$4',",
      '  get: ({ get }) => {',
      '',
      '  }',
      '});',
    ],
  },
  {
    name: 'const recoil selector',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.selector.userState
    regexp: '^([ ]*)e\\.c\\.(selector)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      'export const $3State = $2({',
      "  key: '$3State',",
      '  get: ({ get }) => {',
      '',
      '  }',
      '});',
    ],
  },
  {
    name: 'const recoil selector',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.selectorFamily.userState
    regexp: '^([ ]*)e\\.c\\.(selectorFamily)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      'export const $3 = $2({',
      "  key: '$3',",
      '  get: () => async ({ get }) => {',
      '',
      '  }',
      '});',
    ],
  },
  {
    name: 'export default',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.d.Button
    regexp: '(^e\\.d\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export default $2;'],
  },
  {
    name: 'export default',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.d
    regexp: '(^e\\.d);?$',
    global: true, // global
    replace: ['export default {', '', '}'],
  },
  {
    name: 'export type',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.tp.Button
    regexp: '(^e\\.tp\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export type $2Props = {', '', '};'],
  },
  {
    name: 'export const',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.fn.pug.Hello
    regexp: '(^e\\.c\\.fn\\.pug\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export const $2 = () => {', '  return pug`', '', '  `;', '}'],
  },
  {
    name: 'export const',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.sfn.pug.Hello
    regexp: '(^e\\.c\\.sfn\\.pug\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export const $2 = () => pug`', '', '`;'],
  },
  {
    name: 'export const',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.fn.Hello
    regexp: '(^e\\.c\\.fn\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export const $2 = () => {', '', '};'],
  },
  {
    name: 'export const',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.c.Hello
    regexp: '(^e\\.c\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export const $2 = '],
  },

  {
    name: 'export function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.rfn.test.props
    regexp: '(^e\\.)(rfn\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      'function $3($4) {',
      '  const classes = useStyles();',
      '',
      '  return pug`',
      '',
      '  `;',
      '}',
      '',
      'export default $3;',
    ],
  },
  {
    name: 'export function',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.rfn.test
    regexp: '(^e\\.)(rfn\\.)([^;\n]*);?$',
    global: true, // global
    replace: [
      'function $3() {',
      '  const classes = useStyles();',
      '',
      '  return pug`',
      '',
      '  `;',
      '}',
      '',
      'export default $3',
    ],
  },
  {
    name: 'export function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.fn.test.props
    regexp: '(^e\\.)(fn\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['export function $3($4) {', '', '}'],
  },
  {
    name: 'export function',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.fn.test
    regexp: '(^e\\.)(fn\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export function $3() {', '', '}'],
  },
  {
    name: 'export function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.sfn.test.props
    regexp: '(^e\\.)(sfn\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['export function $3($4) {', '', '}'],
  },
  {
    name: 'export function',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // e.sfn.test
    regexp: '(^e\\.)(sfn\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['export function $3() {', '', '}'],
  },
  {
    name: 'const function 1',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.fn.pug.test
    regexp: '^([ ]*)c\\.(fn\\.pug\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = () => {', '', '  return pug`', '', '  `;', '$1};'],
  },
  {
    name: 'const function 3',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.fn.test.param.param
    regexp: '^([ ]*)c\\.(fn\\.)(.*)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = ($4) => ($5) => {\n$1};',
  },
  {
    name: 'const function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.fn.test.param
    regexp: '^([ ]*)c\\.(fn\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = ($4) => {', '', '$1};'],
  },
  {
    name: 'const function 1',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.fn.test
    regexp: '^([ ]*)c\\.(fn\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = () => {', '', '$1};'],
  },
  {
    name: 'const function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.afn.test.param
    regexp: '^([ ]*)c\\.(afn\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = async ($4) => {', '', '$1};'],
  },
  {
    name: 'const function 1',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.afn.test
    regexp: '^([ ]*)c\\.(afn\\.)([^;\n]*);?$',
    global: true, // global
    replace: ['$1const $3 = async () => {', '', '$1};'],
  },
  {
    name: 'const simple function 3',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.sfn.test.param.param
    regexp: '^([ ]*)c\\.(sfn\\.)(.*)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = ($4) => ($5) => ',
  },
  {
    name: 'const simple function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.sfn.test.param
    regexp: '^([ ]*)c\\.(sfn\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = ($4) => ',
  },
  {
    name: 'const simple function 1',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.sfn.test
    regexp: '^([ ]*)c\\.(sfn\\.)([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = () => ',
  },
  {
    name: 'const useState 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useState.value.params
    regexp: '^([ ]*)c\\.(useState\\.)(.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const [$3$4, set\\U$3$4] = useState($5);',
  },
  {
    name: 'const useState',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useState.value
    regexp: '^([ ]*)c\\.(useState\\.)(.)([^;\n]*);?$',
    global: true, // global
    replace: '$1const [$3$4, set\\U$3$4] = useState();',
  },
  {
    name: 'const useSession 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useSession.value.params
    regexp: '^([ ]*)c\\.(useSession\\.)(.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "$1const [$3$4, set\\U$3$4] = useSession('$3$4', $5);",
  },
  {
    name: 'const useContext',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.use.Auth.user.params
    regexp: '^([ ]*)c\\.(use)\\.(.*)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "$1const { $5 } = use\\U$3('$4')();",
  },
  {
    name: 'const useContext',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.use.Auth.user
    regexp: '^([ ]*)c\\.(use)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "$1const $4 = use\\U$3('$4')();",
  },
  {
    name: 'const useContext',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // sv.use.CardRouter.setCard
    // setCard: useCardRouter('setCard')(),
    regexp: '^([ ]*)sv\\.(use)\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "$1$4: use\\U$3('$4')(),",
  },
  {
    name: 'const useContext',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // sv.user
    regexp: '^([ ]*)sv\\.([^;,\n]*)[;,]?$',
    global: true, // global
    replace: '$1$2: (state) => state.$2,',
  },
  {
    name: 'const useSession',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useSession.value
    regexp: '^([ ]*)c\\.(useSession\\.)(.)([^;\n]*);?$',
    global: true, // global
    replace: "$1const [$3$4, set\\U$3$4] = useSession('$3$4');",
  },
  {
    name: 'const useCookie 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useCookie.value.params
    regexp: '^([ ]*)c\\.(useCookie\\.)(.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "$1const [$3$4, set\\U$3$4] = useCookie('$3$4', $5);",
  },
  {
    name: 'const useCookie',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useCookie.value
    regexp: '^([ ]*)c\\.(useCookie\\.)(.)([^;\n]*);?$',
    global: true, // global
    replace: "$1const [$3$4, set\\U$3$4] = useCookie('$3$4');",
  },
  {
    name: 'const useMediaQuery',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useMediaQuery.test
    regexp: '^([ ]*)c\\.(useMediaQuery\\.)([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = useMediaQuery();',
  },
  {
    name: 'const useTheme',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.useTheme.test
    regexp: '^([ ]*)c\\.(useTheme\\.)([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = useTheme();',
  },
  {
    name: 'const createMuiTheme',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.createMuiTheme.test
    regexp: '^([ ]*)c\\.(createMuiTheme\\.)([^;\n]*);?$',
    global: true, // global
    replace: '$1const $3 = createMuiTheme();',
  },
  {
    name: 'const variable 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.test.value
    regexp: '^([ ]*)c\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const $2 = $3;',
  },
  {
    name: 'const variable',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.test = useStyles()
    regexp: '^([ ]*)c\\.(.*) = ([^;\n]*)(;?)$',
    global: true, // global
    replace: '$1const $2 = $3$4',
  },
  {
    name: 'const variable',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // c.test
    regexp: '^([ ]*)c\\.([^;\n]*);?$',
    global: true, // global
    replace: '$1const $2 = ',
  },
  // function
  {
    name: 'function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // fn.test.props
    regexp: '^([ ]*)fn\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1function $2($3) {', '', '$1}'],
  },
  {
    name: 'function 1',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // fn.test
    regexp: '^([ ]*)fn\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1function $2() {', '', '$1}'],
  },
  {
    name: 'function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // afn.test.props
    regexp: '^([ ]*)afn\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1$2($3) {', '', '$1}'],
  },
  {
    name: 'function 1',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // afn.test
    regexp: '^([ ]*)fn\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1$2() {', '', '$1}'],
  },
  {
    name: 'react function 2',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // rfn.test.props
    regexp: '^rfn\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      'function $1($2) {',
      '',
      '',
      '  return pug`',
      '',
      '  `;',
      '}',
      '',
      '$1.propTypes = {',
      '',
      '};',
    ],
  },
  {
    name: 'react function',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // rfn.test
    regexp: '^rfn\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      'function $1() {',
      '',
      '',
      '  return pug`',
      '',
      '  `;',
      '}',
      '',
      '$1.propTypes = {',
      '',
      '};',
    ],
  },

  // pug map
  {
    name: 'pug map',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // map.fadeTransition.{ item, key, props }
    regexp: '^([ ]*)map\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: [
      '$1${$2.map(($3) => {',
      '',
      '',
      '$1  return pug`',
      '',
      '$1  `;',
      '$1})}',
    ],
  },

  // add custom component
  {
    name: 'add @components component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // a.system/Button
    // a.base/Button
    regexp: '^a\\.(base|system|part|screen)\\/([^;\n]*);?$',
    removeSpace: true,
    trim: true,
    global: true, // global
    replace: "import $2 from '@components/$1/$2';",
  },
  {
    name: 'add @components component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // a.lib/context.useSomething,
    // a.pages/api/scripts.useSomething,
    regexp: '^(?=.*,)a\\.((lib|pages) ?\\/ ?.*)\\.([^;\n]*);?$',
    removeSpace: true,
    trim: true,
    global: true, // global
    replace: "import { $3 } from '@$1';",
  },
  {
    name: 'add @components component',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // a.lib/theme
    regexp: '^a\\.(lib\\s?\\/\\s?([^;\n]*));?$',
    removeSpace: true,
    trim: true,
    global: true, // global
    replace: "import $2 from '@$1';",
  },

  // typescript type
  {
    name: 'typescript type',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // r.node
    regexp: 'r\\.node(;?)',
    global: true, // global
    replace: 'React.ReactNode$1',
  },
  {
    name: 'typescript type',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // r.e.change.HTMLButtonElement
    regexp: 'r\\.e\\.(.*)\\.([^;\n\\)]*);?',
    global: true, // global
    replace: 'React.\\U$1Event<$2>',
  },
  {
    name: 'typescript type',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // r.fc
    regexp: 'r\\.fc;?',
    global: true, // global
    replace: 'React.FC',
  },
  {
    name: 'typescript type',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // r.fc.LaunchProps
    regexp: 'r\\.fc\\.([^;\n]*);?$',
    global: true, // global
    replace: 'React.FC<$1>',
  },
  {
    name: 'typescript type',
    match: '\\.(js|ts|mdx|jsx|tsx)?$', // html
    // rn
    regexp: ' rn([^;\n]*);?$',
    global: true, // global
    replace: ' ReactNode;',
  },

  // require
  {
    name: 'require',
    match: '\\.(js)?$', // html
    // r.apollo-server.ApolloServer,
    regexp: '^(?=.*,)(r\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "const { $3 } = require('$2');",
  },
  {
    name: 'require',
    match: '\\.(js)?$', // html
    // r../schema.typeDefs
    regexp: '^(r\\.)(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: "const $3 = require('$2');",
  },
  {
    name: 'require',
    match: '\\.(js)?$', // html
    // r.isemail
    regexp: '^(r\\.)([^;\n]*);?$',
    global: true, // global
    replace: "const $2 = require('$2');",
  },
  {
    name: 'module exports',
    match: '\\.(js)?$', // html
    // me.typeDefs
    regexp: '^(me\\.)([^;\n]*);?$',
    global: true, // global
    replace: 'module.exports = $2;',
  },
  {
    name: 'type',
    match: '\\.(js|ts|jsx|tsx)?$', // html
    // tp.User
    regexp: '^([ ]*)tp\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1type $2 = {', '', '$1}'],
  },
  {
    name: 'interface',
    match: '\\.(js|ts|jsx|tsx)?$', // html
    // if.User
    regexp: '^([ ]*)if\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1interface $2 {', '', '$1}'],
  },
  {
    name: 'interface',
    match: '\\.(js|ts|jsx|tsx)?$', // html
    // e.if.User
    regexp: '^e\\.if\\.([^;\n]*);?$',
    global: true, // global
    replace: ['export interface $1 {', '', '}'],
  },
  {
    name: 'enum',
    match: '\\.(js|ts)?$', // html
    // en.PatchSize
    regexp: '^([ ]*)en\\.([^;\n]*);?$',
    global: true, // global
    replace: ['$1enum $2 {', '', '$1}'],
  },
  {
    name: 'console.log',
    match: '\\.(js|jsx|ts|tsx)?$', // html
    // cl.explanation.data
    regexp: '^([ ]*)cl\\.(.*)\\.([^;\n]*);?$',
    global: true, // global
    replace: ["$1console.log('$2', $3)"],
  },
  {
    name: 'console.log',
    match: '\\.(js|jsx|ts|tsx)?$', // html
    // cl.data
    regexp: '^([ ]*)cl\\.([^;\n]*);?$',
    global: true, // global
    replace: ["$1console.log('$2', $2)"],
  },
];

export default setting;
