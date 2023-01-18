import { Entry } from '@/types'
import { filenameExt } from '@/utils'

const fileExts: O<string[]> = {
  log: [
    'conf',
    'config',
    'cfg',
    'ini',
    'yml',
    'yaml',
    'properties',
    'log',
    'txt',
    '/.gitignore',
    '/.gitconfig',
    '/dockerfile',
    '/.vimrc',
  ],
  mp: ['mp3', 'm4a', 'flac', 'mid', 'midi', 'wav'],
  exe: ['exe', 'deb', 'sh', 'rpm', 'com', 'jar', 'msi'],
  jpeg: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
  md: ['md', 'markdown'],
  mp1: ['mp4', 'mov', 'wmv', 'avi', 'flv', 'webm', 'rmvb', 'mkv', 'ogg'],
  pdf: ['pdf'],
  doc: ['doc', 'docx'],
  pptx: ['ppt', 'pptx'],
  xlsx: ['xls', 'xlsx', 'csv'],
  xml: [
    'adoc',
    'ahk',
    'ahkl',
    'applescript',
    'as',
    'asc',
    'asciidoc',
    'asp',
    'aspx',
    'awk',
    'bash',
    'bat',
    'c',
    'c++',
    'cc',
    'cmake',
    'cmd',
    'coffee',
    'cpp',
    'cs',
    'css',
    'cxx',
    'dart',
    'diff',
    'dockerfile',
    'erl',
    'es',
    'escript',
    'glsl',
    'go',
    'gradle',
    'graphql',
    'groovy',
    'h',
    'h++',
    'haml',
    'hpp',
    'htm',
    'html',
    'hxx',
    'ino',
    'java',
    'js',
    'json',
    'jsp',
    'jsx',
    'kt',
    'ktm',
    'kts',
    'less',
    'lisp',
    'lua',
    'm4',
    'ninja',
    'patch',
    'php',
    'pom',
    'py',
    'rb',
    'rs',
    'sass',
    'scala',
    'scaml',
    'scpt',
    'scss',
    'sh',
    'smali',
    'sql',
    'svg',
    'tex',
    'ts',
    'tsx',
    'vb',
    'vba',
    'vbs',
    'vim',
    'vue',
    'xhtml',
    'xml',
    'zsh',
  ],
  zip: ['zip', 'tar', 'gz', 'rar', '7z', 'xz'],
  apk: ['apk'],
}

const extMapping: O<string> = {}
const fullNameMapping: O<string> = {}
Object.keys(fileExts).forEach((icon) => {
  fileExts[icon].forEach((ext) => {
    if (ext.startsWith('/')) {
      fullNameMapping[ext.substring(1)] = icon
    } else {
      extMapping[ext] = icon
    }
  })
})

const dirIcon = 'folder'
const parentDirIcon = 'iconfanhuishangyiji'
const fileFallbackIcon = 'file'

export function getIconSVG(entry: Entry) {
  let icon
  if (entry.type === 'dir') icon = dirIcon
  if (entry.type === 'file') {
    icon = fullNameMapping[entry.name.toLocaleLowerCase()]
    if (!icon) {
      const ext = entry.meta.ext || filenameExt(entry.name)
      icon = extMapping[ext] || fileFallbackIcon
    }
  }
  if (entry.name === '..') icon = parentDirIcon
  return '#icon-' + icon
}
