export const projects = [
  {
    slug: 'modoru-mirai-ya',
    title: '未来屋書店の店舗サービスおよびアプリケーションの改善提案',
    titleshort: '未来屋書店UXリサーチ',
    timeline: '2024.11 - 2024.12',
    year: '2024',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    imageHeader: ['/assets/Miraiya/imageHeader.jpeg'],
    imageBanner: ['/assets/Miraiya/imageBanner.jpeg'],

    sections: [
      {
        heading: '作品制作の目的・意図',
        body: '本プロジェクトは、未来屋書店の新サービス創造に向けて、体系的なUXリサーチを実践し、そこから得られたインサイトを基にサービスコンセプトを策定することを目指しました。特に、定量・定性の両面からユーザー理解を深めることで、表層的なニーズだけでなく、潜在的な期待や不安、行動パターンを明らかにすることを重視しています。リサーチでは、イオンモール来店者を対象としたアンケート調査（8名）と半構造化インタビュー（4名）を実施。「家族での買い物」という文脈における書店利用の実態や、「ついで利用」と「目的利用」の行動パターンの違いなど、これまで明確になっていなかったユーザーの利用文脈を掘り下げました。これらの知見を競合分析と組み合わせることで、未来屋書店ならではの新しい価値提供の可能性を探求しています。',
        images: ['/assets/Miraiya/image1.jpeg']
      },
      {
        heading: '課題',
        body: 'UXリサーチを通じて構築したユーザーのメンタルモデルから、書店利用における5つの重要なフェーズ（利用する、探す、判断する、読む、交流する）が明らかになりました。これらのフェーズごとにユーザーの行動と期待を分析し、狩野モデルを用いて課題を構造化しました。ベースとなる「当たり前品質」では、アプリのUX改善が急務であることが判明。レビューデータの分析から、基本機能の使いづらさがユーザー満足度を大きく低下させている実態が浮かび上がりました。インタビューからは「時間がない中での選書」「購入後の後悔」といった不安要素も特定され、これらへの対応が必要不可欠だと分かりました。「一元的品質」では、イオンモールのロケーション特性を活かしきれていない課題が明確になりました。日常の買い物動線に組み込まれているにもかかわらず、その利便性を十分に活用できていません。また顧客体験マップからは、「立ち読みの時間的制約」が購買の大きな障壁となっている実態も判明しました。さらに「魅力的品質」においては、家族での来店という特徴を活かした体験価値の創出が不足していることが分かりました。特に、読書を通じた家族間のコミュニケーションへの潜在的なニーズが、インタビューから強く示唆されています。',
        images: ['/assets/Miraiya/image2.jpeg', '/assets/Miraiya/image3.jpeg', '/assets/Miraiya/image4.jpeg']
      },
      {
        heading: '成果',
        body: 'これらのリサーチ発見を統合し、新サービス「PICK & GO↗️」のコンセプトを策定しました。コンセプトの核となる「試し読み時間の販売」は、ユーザーの行動観察から得られた「じっくり選びたいが時間がない」というジレンマを解決するものです。カスタマージャーニーマップの分析から、モール来店から購買判断までの動線を最適化し、アプリを通じた予約・受け取り・返却の自動化により、既存の買い物行動との自然な接続を実現します。また、ペルソナ分析から特定された「家族との共有」ニーズに応えるため、読書時間のギフト機能や共有機能を実装します。実現に向けては、初期のユーザビリティ改善から段階的に機能を拡充していく実装計画を策定。各フェーズでの定量・定性指標を設定し、継続的な改善サイクルを回していく方針です。',
        images: ['/assets/Miraiya/image5.jpeg', '/assets/Miraiya/image6.jpeg', '/assets/Miraiya/image7.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料(PDF)はこちら　＞',
        href: 'https://drive.google.com/file/d/1pQWzZJvnoIajPiHQl70PiYC4ru6TRx-8/view?usp=sharing'
      }
    ]
  },
  {
    slug: 'TalkingMuseum',
    title: '生きた展示と、\n会話ができる博物館',
    titleshort: 'おしゃべりミュージアム',
    timeline: '2023.5 - 2024.1',
    year: '2024',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    discipline: 'HCI, XR, Interaction Design',
    imageHeader: ['/assets/TalkingMuseum/imageHeader.jpeg'],
    imageBanner: ['/assets/TalkingMuseum/imageBanner.jpeg'],
    sections: [
      {
        heading: '作品制作の目的・意図',
        body: '本作品は修士研究「博物館におけるこどもを含む社会集団のための協働学習体験デザイン」の一環として、来館者に協働的な学習を促すためのAR体験デザインを行いました。国立民族学博物館の研究者である菊澤律子先生、言語学者である巽智子先生から課題ヒアリングを行い、コンセプトを定めた後にUXデザイン、UIデザイン、ソフトウェア開発、ワークショップ設計を1人で担当しました。従来の静的な展示解説から脱却し、展示物との直接的な対話を可能にするARシステムを構築することで、特に子どもたちの知的好奇心を刺激する革新的な学習環境の創出を目指しました。',
        images: ['/assets/TalkingMuseum/image1.jpeg']
      },
      {
        heading: '課題',
        body: '近年、モバイル端末を用いたデジタル支援の博物館への導入が進んでいますが、人と人との相互作用を妨げる側面も指摘されています。特に、子どもを含む社会集団での協働学習において、デジタル機器の活用と人との交流のバランスが課題となっていました。また、大阪にある順路歩行距離5kmの国立民族学博物館では、12,000点にも及ぶ展示物の中から、オセアニアの人々の発達した航海術や農耕技術など、工夫を凝らした生活様式を効果的に伝える新しい展示手法が求められていました。',
        images: ['/assets/TalkingMuseum/image2.jpeg']
      },
      {
        heading: '成果',
        body: 'ARを活用した対話型展示システムの導入により、来館者の体験価値を大きく向上させることができました。展示物との直接的な対話を通じて、来館者の興味関心に応じた柔軟な情報提供が可能となり、特に子どもたちの自発的な学習意欲を高める効果が確認されました。また、デジタルチャームという形で体験を物質化することで、来館後も継続的な学習効果を促進する仕組みを確立しました。実証実験では、参加者の93%が「体験を通じて新しい発見があった」と回答し、展示物への理解度が従来比で約40%向上するという具体的な成果が得られています。',
        images: ['/assets/TalkingMuseum/image3.jpeg', '/assets/TalkingMuseum/image4.jpeg', '/assets/TalkingMuseum/image5.jpeg', '/assets/TalkingMuseum/image6.jpeg']
      }
    ],
    links: [
      { text: '詳細資料(PDF)はこちら　＞', href: 'https://drive.google.com/file/d/1mf3qXGPMJtWUCAJIxdM5Yxafjz6Q2YE7/view?usp=sharing' },
      { text: '出版された論文はこちら　＞', href: 'https://dl.acm.org/doi/10.1145/3628516.3659389' }
    ]
  },
  {
    slug: 'interactive-museum',
    title: '展示の記憶を、\nあつめて学ぶ体験',
    titleshort: 'Memorium',
    timeline: '2023.10 - 2024.1',
    year: '2023',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    discipline: 'HCI, XR, Interaction Design',
    imageHeader: ['/assets/Memorium/imageHeader.jpeg'],
    imageBanner: ['/assets/Memorium/imageBanner.jpeg'],


    sections: [
      {
        heading: '作品制作の目的・意図',
        body: '本作品は修士研究「博物館におけるこどもを含む社会集団のための協働学習体験デザイン」の一環として、来館者に協働的な学習を促すためのAR体験デザインを行いました。国立民族学博物館の研究者である菊澤律子先生、言語学者である巽智子先生から課題ヒアリングを行い、コンセプトを定めた後にUXデザイン、UIデザイン、ソフトウェア開発、ワークショップ設計を1人で担当しました。従来の静的な展示解説から脱却し、展示物との直接的な対話を可能にするARシステムを構築することで、特に子どもたちの知的好奇心を刺激する革新的な学習環境の創出を目指しました。',
        images: ['/assets/Memorium/image1.jpeg']
      },
      {
        heading: '課題',
        body: '近年、モバイル端末を用いたデジタル支援の博物館への導入が進んでいますが、人と人との相互作用を妨げる側面も指摘されています。特に、子どもを含む社会集団での協働学習において、デジタル機器の活用と人との交流のバランスが課題となっていました。また、大阪にある順路歩行距離5kmの国立民族学博物館では、12,000点にも及ぶ展示物の中から、オセアニアの人々の発達した航海術や農耕技術など、工夫を凝らした生活様式を効果的に伝える新しい展示手法が求められていました。',
        images: ['/assets/Memorium/image2.jpeg']
      },
      {
        heading: '成果',
        body: 'ARを活用した対話型展示システムの導入により、来館者の体験価値を大きく向上させることができました。展示物との直接的な対話を通じて、来館者の興味関心に応じた柔軟な情報提供が可能となり、特に子どもたちの自発的な学習意欲を高める効果が確認されました。また、デジタルチャームという形で体験を物質化することで、来館後も継続的な学習効果を促進する仕組みを確立しました。実証実験では、参加者の93%が「体験を通じて新しい発見があった」と回答し、展示物への理解度が従来比で約40%向上するという具体的な成果が得られています。',
        images: ['/assets/Memorium/image3.jpeg', '/assets/Memorium/image4.jpeg', '/assets/Memorium/image5.jpeg', '/assets/Memorium/image6.jpeg', '/assets/Memorium/image7.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料（PDF）　＞',
        href: 'https://drive.google.com/file/d/1NwjmYMAtKPd8cXL7sBlSZzSs-pS4uZIk/view?usp=sharing'
      },
      {
        text: '出版された論文　＞',
        href: 'https://dl.acm.org/doi/10.1007/978-981-99-8248-6_19'
      }
    ]
  },

  {
    slug: 'lets-speak-with-hands',
    title: 'スマホを、\n持ったまま手話学習',
    titleshort: 'Let\'s Speak with Hands',
    timeline: '2022.10 - 2022.12',
    year: '2022',
    team: '徳野稀太',
    tools: 'Swift, CreateML',
    discipline: 'HCI, Interaction Design, Machine Learning',
    imageHeader: ['/assets/Hands/imageHeader.jpeg'],
    imageBanner: ['/assets/Hands/imageBanner.jpeg'],


    sections: [
      {
        heading: '作品制作の目的・意図',
        body: 'スマートフォンを活用した手話学習体験「Let\'s Speak with Hands」は、従来の手話教育における時間的・空間的制約を解消し、誰もが手軽に手話を学べる環境の創出を目指しています。筑波技術大学の加藤伸子教授との綿密な協議を経て、特に初学者に焦点を当てた学習体験を設計しました。従来の対面式手話教室が抱える高コストや場所的制約という課題に対し、スマートフォンという身近なデバイスを活用することで、時間や場所を選ばない学習環境を実現。「いつでも、どこでも、手軽に」という理念のもと、手話学習のバリアを大きく低減するためのPoCを制作しました。',
        images: ['/assets/Hands/image1.jpeg']
      },
      {
        heading: '課題',
        body: '手話学習における最大の課題は、2次元の学習教材から3次元の動作を正確に理解し再現することの困難さにあります。従来の動画や図解による学習方法では、立体的な手の動きを平面的な情報から理解しなければならず、その過程で多くの誤認識が発生します。さらに深刻な問題として、誤った動作の「化石化」があります。独学環境では自身の間違いに気づく機会が限られているため、不適切な動作が習慣化してしまい、後の修正が極めて困難になります。また、既存の高度なデプスセンサーを用いた学習システムは、高額な初期投資が必要となり、気軽な学習開始の障壁となっています。',
        images: ['/assets/Hands/image2.jpeg']
      },
      {
        heading: '手法',
        body: '「Let\'s Speak with Hands」は、CreateMLを活用した機械学習モデルとiPhoneの加速度センサーの統合にあります。システムの処理フローは以下の通りです：まず、加速度センサーから取得した3軸（X,Y,Z）の時系列データを40msごとにサンプリングし、これを基に動作の特徴量を抽出します。この時系列データは、手話表現特有の動きパターンを捉えるために、適切な時間窓でセグメント化されます。CreateMLモデルは、手話話者から収集した大量の訓練データを用いて、各手話表現に特徴的な加速度パターンを学習します。特に、動作の速さ、大きさ、方向性といった要素を総合的に判断し、高精度な動作認識を実現しています。モデルの出力は、リアルタイムでスコアリングされ、ユーザーにフィードバックとして提供されます。また、誤認識を防ぐために、ノイズ除去やデータの正規化といった前処理も実装されています。',
        images: ['/assets/Hands/image3.jpeg', '/assets/Hands/image4.jpeg']
      },
      {
        heading: '成果',
        body: '「Let\'s Speak with Hands」は、スマートフォンの加速度センサーを活用することで、従来のカメラベースのシステムと比較して大幅なコスト削減を実現しました。特に注目すべきは、手話話者の遊び「ドラえもん手話」からインスピレーションを得た革新的な学習アプローチです。握り拳で手話動作を行い単語を当てるという遊びの要素を取り入れることで、楽しみながら正確な動作を習得できる環境を構築しました。リアルタイムでの動作フィードバックと点数評価システムにより、学習者は自身の進捗を客観的に把握でき、効率的な上達が可能となっています。',
        images: ['/assets/Hands/image5.jpeg', '/assets/Hands/image6.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料(PDF)はこちら　＞',
        href: 'https://drive.google.com/file/d/1GMquJDvNjyWwFCgseg4VpRj1qjMQn2rR/view?usp=sharing'
      }
    ]
  },
  {
    slug: 'finca',
    title: '違いを楽しみ、\n進化を学ぶ体験',
    titleshort: 'FINCA',
    timeline: '2023.10 - 2024.1',
    year: '2023',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    discipline: 'HCI, XR, Interaction Design',
    imageHeader: ['/assets/Finca/imageHeader.jpeg'],
    imageBanner: ['/assets/Finca/imageBanner.jpeg'],

    sections: [
      {
        heading: '制作の目的・意図',
        body: '博物館における進化論学習において、特に子どもたちが直感的に理解できる体験の不足が課題となっています。国立科学博物館との協働のもと、SharedAR技術を活用した新しい学習体験「FINCA」を開発しました。従来の静的な展示物では伝えきれなかった、生物の進化プロセスをインタラクティブに体験できる環境を構築することで、複数人での協働的な学習を促進し、進化論への理解を深めることを目指しています。',
        images: ['/assets/Finca/image1.jpeg']
      },
      {
        heading: '課題',
        body: '従来の博物館における進化論学習では、精巧な木製模型を用いた展示が一般的でしたが、壊れやすさから実際に触れることができず、また生態系や生息環境といった重要な文脈情報が十分に伝わりにくいという問題がありました。特に子どもたちにとって、静的な展示物だけでは進化のダイナミックなプロセスを理解することが困難でした。また、個人での観察に留まりがちで、他者との知見共有や協働的な学びの機会が限られていたことも、学習効果を制限する要因となっていました。',
        images: ['/assets/Finca/image2.jpeg']
      },
      {
        heading: '成果',
        body: 'FINCAは、実物の環境キットとAR技術を組み合わせることで、ダーウィンフィンチの進化を体験的に学ぶことを可能にしました。複数のタブレット端末を用いた共有AR体験により、参加者は餌やりなどのインタラクションを通じて鳥の形態変化を観察できます。実施したワークショップでは、51名の参加者の80.4%が12歳以下の子どもたちで、特に9歳以上の参加者からは協働学習に関して高い評価を得ました。この結果は、AR技術を活用した体験型学習の有効性を示すとともに、年齢に応じた学習デザインの重要性も明らかにしました。',
        images: ['/assets/Finca/image3.jpeg', '/assets/Finca/image4.jpeg', '/assets/Finca/image5.jpeg', '/assets/Finca/image6.jpeg', '/assets/Finca/image7.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料(PDF)はこちら　＞',
        href: 'https://drive.google.com/file/d/1KMSqPaeKYqYsOqw5hXvDFmNBp5gImDZb/view?usp=sharing'
      }
    ]
  }
];