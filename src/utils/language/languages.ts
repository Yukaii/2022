// !WARNING! This file is auto-generated by /scripts/generateLanguagesImport, so all your modifications would be replaced.

import { LanguagePackSet } from '.'
import en from '@/../languages/en.json'
import zhTw from '@/../languages/zh-TW.json'

export type LanguageType = 'en' | 'zh-TW'

export const defaultLanguageType: LanguageType = 'zh-TW'

export const availableLanguageTypes: LanguageType[] = ['en', 'zh-TW']

export const languagePackSet: LanguagePackSet = {
  en: en,
  'zh-TW': zhTw
}