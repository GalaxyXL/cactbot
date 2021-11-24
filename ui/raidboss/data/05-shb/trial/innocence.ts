import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

// Innocence Normal
const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheCrownOfTheImmaculate,
  timelineFile: 'innocence.txt',
  triggers: [
    {
      id: 'Inno Realmrazer',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3E9A', source: 'Innocence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3E9A', source: 'Innozenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3E9A', source: 'Innocence', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3E9A', source: 'イノセンス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3E9A', source: '无瑕灵君', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3E9A', source: '이노센스', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Inno Enthrall',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3E99', source: 'Innocence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3E99', source: 'Innozenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3E99', source: 'Innocence', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3E99', source: 'イノセンス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3E99', source: '无瑕灵君', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3E99', source: '이노센스', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Look Away, Get Towers',
          de: 'Weg schauen, Türme nehmen',
          fr: 'Regardez ailleurs, prenez une tour',
          ja: '背中を向けて、塔を踏む',
          cn: '背对BOSS，踩塔',
          ko: '뒤돌고 장판 들어가기',
        },
      },
    },
    {
      id: 'Inno Reprobation Swords 2',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3EDC', source: 'Innocence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3EDC', source: 'Innozenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3EDC', source: 'Innocence', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3EDC', source: 'イノセンス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3EDC', source: '无瑕灵君', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3EDC', source: '이노센스', capture: false }),
      // 3 seconds cast time + 9.5 seconds until next sword.
      delaySeconds: 9.5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Swords!',
          de: 'Schwerter!',
          fr: 'Épées !',
          ja: '剣くるよ',
          cn: '剑!',
          ko: '검 돌아옴!',
        },
      },
    },

    {
      id: 'Inno Shadowreaver',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3EEA', source: 'Innocence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3EEA', source: 'Innozenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3EEA', source: 'Innocence', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3EEA', source: 'イノセンス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3EEA', source: '无瑕灵君', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3EEA', source: '이노센스', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Inno Righteous Bolt',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3EA3', source: 'Innocence' }),
      netRegexDe: NetRegexes.startsUsing({ id: '3EA3', source: 'Innozenz' }),
      netRegexFr: NetRegexes.startsUsing({ id: '3EA3', source: 'Innocence' }),
      netRegexJa: NetRegexes.startsUsing({ id: '3EA3', source: 'イノセンス' }),
      netRegexCn: NetRegexes.startsUsing({ id: '3EA3', source: '无瑕灵君' }),
      netRegexKo: NetRegexes.startsUsing({ id: '3EA3', source: '이노센스' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Inno Charge',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3EC7', source: 'Innocence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3EC7', source: 'Innozenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3EC7', source: 'Innocence', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3EC7', source: 'イノセンス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3EC7', source: '无瑕灵君', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3EC7', source: '이노센스', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid Charge',
          de: 'ausweichen',
          fr: 'Évitez les charges',
          ja: '突進避けて',
          cn: '躲避冲锋',
          ko: '돌진 피하기',
        },
      },
    },
    {
      id: 'Inno Light Pillar',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '38FC', source: 'Innocence', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '38FC', source: 'Innozenz', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '38FC', source: 'Innocence', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '38FC', source: 'イノセンス', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '38FC', source: '无瑕灵君', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '38FC', source: '이노센스', capture: false }),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Line Stack',
          de: 'In einer Linie sammeln',
          fr: 'Packez-vous en ligne',
          ja: 'シェア',
          cn: '直线分摊',
          ko: '직선 쉐어',
        },
      },
    },
    {
      id: 'Inno Winged Drop Of Light',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '008A' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Circle on YOU',
          de: 'Kreis auf DIR',
          fr: 'Cercle sur vous',
          ja: 'サークルついた',
          cn: '圈圈点名',
          ko: '원형징 대상자',
        },
      },
    },
    {
      // TODO: is there a left, or do all normal modes rotate right??
      id: 'Inno Soul And Body Right',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3EB1', source: 'Innocence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3EB1', source: 'Innozenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3EB1', source: 'Innocence', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3EB1', source: 'イノセンス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3EB1', source: '无瑕灵君', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3EB1', source: '이노센스', capture: false }),
      suppressSeconds: 1,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Rotate Right',
          de: 'Rechts rum rotieren',
          fr: 'Tournez vers la droite',
          ja: '時針回り',
          cn: '向右旋转',
          ko: '오른쪽으로 도세요',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Sword of Condemnation': 'Schwert des Urteils',
        'Innocence': 'Innozenz',
      },
      'replaceText': {
        'Winged Reprobation': 'Schwinge des Urteils',
        'Soul And Body': 'Seele und Körper',
        'Sinsphere': 'Sündensphäre',
        'Shadowreaver': 'Schattenplünderer',
        'Rightful Reprobation': 'Rechtmäßige Verurteilung',
        'Righteous Bolt': 'Blitz der Gerechtigkeit',
        '(?<! )Reprobation': 'Verurteilung',
        'Light Pillar': 'Lichtsäule',
        'Holy Trinity': 'Heilige Dreifaltigkeit',
        'Guiding Light': 'Leitendes Licht',
        'God Ray': 'Göttlicher Strahl',
        'Flaming Sword': 'Flammenschwert',
        'Drop Of Light': 'Lichtabfall',
        'Beatific Vision': 'Seligmachende Schau',
        'Realmrazer': 'Weltenzerstörer',
        'Heavenly Host': 'Machtwort',
        'Daybreak': 'Morgengrauen',
        'Enthrall': 'Bezaubern',
        'Exalted Wing': 'Exaltierte Schwinge',
        'Exalted Plumes': 'Exaltierte Schwaden',
        '--add Phase--': '--Add Phase--',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Sword of Condemnation': 'Épée De Condamnation',
        'Innocence': 'Innocence',
      },
      'replaceText': {
        'Winged Reprobation': 'Réprobation ailée',
        'Soul And Body': 'Âme et corps',
        'Sinsphere': 'Sphère de péchés',
        'Shadowreaver': 'Pilleur d\'ombre',
        'Rightful Reprobation': 'Réprobation légitime',
        'Righteous Bolt': 'Éclair vertueux',
        '(?<! )Reprobation': 'Réprobation',
        'Realmrazer': 'Raye-royaume',
        'Light Pillar': 'Pilier de lumière',
        'Holy Trinity': 'Sainte Trinité',
        'Heavenly Host': 'Milicien céleste',
        'Guiding Light': 'Lumière directrice',
        'God Ray': 'Rayon divin',
        'Flaming Sword': 'Épée du feu des cieux',
        'Exalted Wing': 'Aile exaltée',
        'Exalted Plumes': 'Plumes exaltées',
        'Enthrall': 'Œil captivant',
        'Drop Of Light': 'Goutte de lumière',
        'Daybreak': 'Point du jour',
        'Beatific Vision': 'Vision béatifique',
        '--add Phase--': '--add phase--',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Innocence': 'イノセンス',
        'Sword of Condemnation': '断罪の剣',
      },
      'replaceText': {
        'Winged Reprobation': '断罪の飛翔',
        'Soul And Body': 'ソウル・アンド・ボディー',
        'Sinsphere': 'シンスフィア',
        'Shadowreaver': 'シャドウリーヴァー',
        'Rightful Reprobation': '断罪の旋回',
        'Righteous Bolt': 'ジャッジボルト',
        '(?<! )Reprobation': '断罪',
        'Light Pillar': 'ライトピラー',
        'Holy Trinity': 'ホーリートリニティー',
        'Guiding Light': 'ガイディングライト',
        'God Ray': 'ゴッドレイ',
        'Flaming Sword': '回転せし炎の剣',
        'Drop Of Light': 'ドロップ・オブ・ライト',
        'Beatific Vision': 'ビーティフィックビジョン',
        'Realmrazer': 'レルムレイザー',
        'Heavenly Host': '鶴の一声',
        'Daybreak': 'デイブレイク',
        'Enthrall': 'インスロール・アイ',
        'Exalted Wing': 'エクザルテッドウィング',
        'Exalted Plumes': 'エクロージョン',
        '--add Phase--': '--雑魚フェイス--',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Sword of Condemnation': '断罪之剑',
        'Innocence': '无瑕灵君',
      },
      'replaceText': {
        'Winged Reprobation': '断罪飞翔',
        'Soul And Body': '身心',
        'Sinsphere': '罪恶晶球',
        'Shadowreaver': '夺影',
        'Rightful Reprobation': '断罪回旋',
        'Righteous Bolt': '裁决之雷',
        '(?<! )Reprobation': '(?<! )断罪飞翔',
        'Light Pillar': '光明柱',
        'Holy Trinity': '圣三一',
        'Guiding Light': '指明灯',
        'God Ray': '神光',
        'Flaming Sword': '回转火焰剑',
        'Beatific Vision': '荣福直观',
        'Realmrazer': '灭境',
        'Heavenly Host': '天堂君威',
        'Daybreak': '破晓',
        'Enthrall': '迷魂之眼',
        'Exalted Wing': '高贵之翼',
        'Exalted Plumes': '羽化',
        'Drop Of Light': '落光',
        '--add Phase--': '--小怪--',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Sword of Condemnation': '단죄의 검',
        'Innocence': '이노센스',
      },
      'replaceText': {
        'Winged Reprobation': '단죄의 비상',
        'Soul And Body': '영혼과 육신',
        'Sinsphere': '죄의 구체',
        'Shadowreaver': '그림자 강탈',
        'Rightful Reprobation': '단죄의 선회',
        'Righteous Bolt': '심판자의 번개',
        '(?<! )Reprobation': '선회',
        'Light Pillar': '빛의 기둥',
        'Holy Trinity': '성 삼위일체',
        'Guiding Light': '인도하는 빛',
        'God Ray': '신의 광선',
        'Flaming Sword': '회전 화염검',
        'Beatific Vision': '지복직관',
        'Realmrazer': '영토 지배자',
        'Heavenly Host': '권력자의 한마디',
        'Daybreak': '여명',
        'Enthrall': '매혹의 눈',
        'Exalted Wing': '고귀한 날개',
        'Exalted Plumes': '탈피',
        'Drop Of Light': '빛내림',
        '--add Phase--': '--쫄 페이즈--',
      },
    },
  ],
};

export default triggerSet;
