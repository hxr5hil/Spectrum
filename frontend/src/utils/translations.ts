import { ArticleItem } from "../components/ArticleCard";

export type SupportedLanguage = "English" | "Hindi" | "Punjabi" | "Bengali" | "Tamil" | "Telugu";

export interface Translations {
  // Top status bar
  topBanner: string;
  liveStream: string;
  syncIn: string;
  sync: string;
  syncing: string;
  
  // Brand
  brandSubtitle: string;
  
  // Tabs
  tabNewsFeed: string;
  tabAnalytics: string;
  tabAlertsHub: string;
  tabVideoStudio: string;
  tabAiPlayground: string;
  
  // KPI Cards
  kpiIngestedTitle: string;
  kpiIngestedSub: string;
  kpiPositiveTitle: string;
  kpiPositiveSub: string;
  kpiAdverseTitle: string;
  kpiAdverseSub: string;
  kpiAdverseUrgent: string;
  kpiSectorsTitle: string;
  kpiSectorsSub: string;
  
  // Search & Actions
  searchPlaceholder: string;
  pullLiveRss: string;
  pullingLiveRss: string;
  exportBrief: string;
  filterTopic: string;
  filterPolarity: string;
  all: string;
  showingStories: string;
  pageOf: string;
  prev: string;
  next: string;
  noArticlesFound: string;
  
  // Categories
  catTechnology: string;
  catBusiness: string;
  catPolitics: string;
  catJudiciary: string;
  catScience: string;
  catSports: string;
  catEntertainment: string;
  catInternational: string;
  catCulture: string;
  catCrime: string;
  
  // Sentiments
  sentPositive: string;
  sentNeutral: string;
  sentNegative: string;
  adverseAlert: string;
  
  // Article Card Actions
  draftRebuttal: string;
  notifyLiaison: string;
  notified: string;
  source: string;
  minRead: string;
  readMore: string;
  showLess: string;
  
  // Rebuttal Modal
  rebuttalTitle: string;
  rebuttalSubtitle: string;
  copyStatement: string;
  copied: string;
  dispatchPressDesk: string;
  
  // Alerts Hub
  alertsHubTitle: string;
  alertsHubSubtitle: string;
  urgentIncidents: string;
  dispatchAllPending: string;
  dispatchAlert: string;
  
  // Video Studio
  videoStudioTitle: string;
  videoStudioSubtitle: string;
  ingestedBroadcasts: string;
  
  // AI Playground
  aiPlaygroundTitle: string;
  aiPlaygroundSubtitle: string;
  testHeadline: string;
  testBody: string;
  runInference: string;
  
  // Toast
  langSwitchedToast: string;
  alertDispatchedToast: string;
  briefDownloadedToast: string;
  
  // Footer
  footerTitle: string;
  footerSubtitle: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  English: {
    topBanner: "Autonomous Media Monitoring & Natural Language Sentiment Platform",
    liveStream: "Live Cross-Media Stream",
    syncIn: "Sync in",
    sync: "Sync",
    syncing: "Syncing...",
    brandSubtitle: "Digital Media & Sentiment Intelligence Engine",
    tabNewsFeed: "News Feed",
    tabAnalytics: "Analytics",
    tabAlertsHub: "Alerts Hub",
    tabVideoStudio: "Video Studio",
    tabAiPlayground: "AI Playground",
    kpiIngestedTitle: "Ingested Stories",
    kpiIngestedSub: "Autonomous cross-media crawl",
    kpiPositiveTitle: "Positive Sentiment",
    kpiPositiveSub: "favorable stories",
    kpiAdverseTitle: "Adverse Incidents",
    kpiAdverseSub: "Negative score ≥ 0.50",
    kpiAdverseUrgent: "Urgent",
    kpiSectorsTitle: "Monitored Sectors",
    kpiSectorsSub: "Automated topic taxonomy",
    searchPlaceholder: "Search stories, sectors, topics, or keywords...",
    pullLiveRss: "Pull Live RSS News",
    pullingLiveRss: "Pulling Feeds...",
    exportBrief: "Export Brief",
    filterTopic: "Topic:",
    filterPolarity: "Polarity:",
    all: "All",
    showingStories: "Showing {count} indexed stories",
    pageOf: "Page {page} of {total}",
    prev: "Previous",
    next: "Next",
    noArticlesFound: "No indexed media coverage matching the active criteria.",
    catTechnology: "Technology",
    catBusiness: "Business",
    catPolitics: "Politics",
    catJudiciary: "Judiciary",
    catScience: "Science",
    catSports: "Sports",
    catEntertainment: "Entertainment",
    catInternational: "International",
    catCulture: "Culture",
    catCrime: "Crime",
    sentPositive: "Positive",
    sentNeutral: "Neutral",
    sentNegative: "Negative",
    adverseAlert: "Adverse Alert",
    draftRebuttal: "Draft Rebuttal",
    notifyLiaison: "Notify Liaison",
    notified: "Notified",
    source: "Source",
    minRead: "min read",
    readMore: "Read more",
    showLess: "Show less",
    rebuttalTitle: "AI Media Clarification Drafter",
    rebuttalSubtitle: "Automated press statement generation countering inaccurate coverage",
    copyStatement: "Copy Statement",
    copied: "Copied!",
    dispatchPressDesk: "Dispatch to Press Desk",
    alertsHubTitle: "Incident Escalation Hub",
    alertsHubSubtitle: "Automated trigger for negative news with adversity score ≥ 0.50. Direct escalation to assigned sector leads.",
    urgentIncidents: "Urgent Incidents",
    dispatchAllPending: "Dispatch All Pending",
    dispatchAlert: "Dispatch Alert",
    videoStudioTitle: "Broadcast Video Studio",
    videoStudioSubtitle: "Autonomous speech-to-text transcription and moment-by-moment sentiment analysis",
    ingestedBroadcasts: "INGESTED VIDEO BROADCASTS",
    aiPlaygroundTitle: "Real-Time AI Inference Playground",
    aiPlaygroundSubtitle: "Test custom headlines and story content against the production NLP model",
    testHeadline: "Headline",
    testBody: "Story Body Text",
    runInference: "Run AI Inference",
    langSwitchedToast: "Language switched to English",
    alertDispatchedToast: "Escalation alert dispatched to",
    briefDownloadedToast: "Executive Briefing downloaded successfully",
    footerTitle: "Spectrum • Autonomous Digital Media & Sentiment Intelligence Engine",
    footerSubtitle: "Real-time cross-media automated crawling, sentiment classification and feedback platform",
  },
  Hindi: {
    topBanner: "स्वायत्त मीडिया निगरानी एवं प्राकृतिक भाषा भावना विश्लेषण मंच",
    liveStream: "लाइव क्रॉस-मीडिया स्ट्रीम",
    syncIn: "सिंक बाकी",
    sync: "सिंक करें",
    syncing: "सिंक हो रहा है...",
    brandSubtitle: "डिजिटल मीडिया और भावना विश्लेषण खुफिया इंजन",
    tabNewsFeed: "समाचार फ़ीड",
    tabAnalytics: "विश्लेषण",
    tabAlertsHub: "अलर्ट केंद्र",
    tabVideoStudio: "वीडियो स्टूडियो",
    tabAiPlayground: "एआई प्लेग्राउंड",
    kpiIngestedTitle: "संकलित समाचार",
    kpiIngestedSub: "स्वायत्त क्रॉस-मीडिया क्रॉल",
    kpiPositiveTitle: "सकारात्मक भावना",
    kpiPositiveSub: "अनुकूल समाचार रिपोर्ट",
    kpiAdverseTitle: "प्रतिकूल घटनाएं",
    kpiAdverseSub: "नकारात्मक स्कोर ≥ 0.50",
    kpiAdverseUrgent: "अति आवश्यक",
    kpiSectorsTitle: "निगरानी वाले क्षेत्र",
    kpiSectorsSub: "स्वचालित विषय वर्गीकरण",
    searchPlaceholder: "समाचार, क्षेत्र, विषय या कीवर्ड खोजें...",
    pullLiveRss: "लाइव RSS समाचार लाएं",
    pullingLiveRss: "समाचार लाए जा रहे हैं...",
    exportBrief: "संक्षिप्त विवरण डाउनलोड करें",
    filterTopic: "विषय:",
    filterPolarity: "भावना:",
    all: "सभी",
    showingStories: "{count} अनुक्रमित समाचार प्रदर्शित",
    pageOf: "पृष्ठ {page} / {total}",
    prev: "पिछला",
    next: "अगला",
    noArticlesFound: "सक्रिय मानदंडों से मेल खाने वाला कोई समाचार नहीं मिला।",
    catTechnology: "प्रौद्योगिकी",
    catBusiness: "व्यापार",
    catPolitics: "राजनीति",
    catJudiciary: "न्यायपालिका",
    catScience: "विज्ञान",
    catSports: "खेल",
    catEntertainment: "मनोरंजन",
    catInternational: "अंतर्राष्ट्रीय",
    catCulture: "संस्कृति",
    catCrime: "अपराध",
    sentPositive: "सकारात्मक",
    sentNeutral: "तटस्थ",
    sentNegative: "नकारात्मक",
    adverseAlert: "प्रतिकूल चेतावनी",
    draftRebuttal: "खंडन तैयार करें",
    notifyLiaison: "अधिकारी को सूचित करें",
    notified: "सूचित किया गया",
    source: "स्रोत",
    minRead: "मिनट वाचन",
    readMore: "और पढ़ें",
    showLess: "कम दिखाएं",
    rebuttalTitle: "एआई मीडिया स्पष्टीकरण एवं खंडन",
    rebuttalSubtitle: "गलत या भ्रामक रिपोर्टिंग के जवाब में स्वचालित प्रेस नोट निर्माण",
    copyStatement: "वक्तव्य कॉपी करें",
    copied: "कॉपी हो गया!",
    dispatchPressDesk: "प्रेस डेस्क को भेजें",
    alertsHubTitle: "घटना प्रबंधन एवं एस्केलेशन हब",
    alertsHubSubtitle: "प्रतिकूल स्कोर ≥ 0.50 वाले नकारात्मक समाचारों का स्वचालित संज्ञान। संबंधित नोडल अधिकारी को तत्काल प्रेषण।",
    urgentIncidents: "गंभीर घटनाएं",
    dispatchAllPending: "सभी लंबित अलर्ट भेजें",
    dispatchAlert: "अलर्ट भेजें",
    videoStudioTitle: "प्रसारण वीडियो स्टूडियो",
    videoStudioSubtitle: "स्वचालित वाक्-से-पाठ प्रतिलेखन एवं समय-आधारित भावना विश्लेषण",
    ingestedBroadcasts: "संकलित वीडियो प्रसारण",
    aiPlaygroundTitle: "रीयल-टाइम एआई मॉडल प्लेग्राउंड",
    aiPlaygroundSubtitle: "उत्पादन एनएलपी मॉडल के विरुद्ध कस्टम सुर्खियों और समाचार सामग्री का परीक्षण करें",
    testHeadline: "शीर्षक",
    testBody: "समाचार विवरण",
    runInference: "एआई विश्लेषण चलाएं",
    langSwitchedToast: "भाषा बदलकर हिन्दी कर दी गई है",
    alertDispatchedToast: "एस्केलेशन अलर्ट अधिकारी को प्रेषित:",
    briefDownloadedToast: "कार्यकारी विवरण सफलतापूर्वक डाउनलोड हुआ",
    footerTitle: "स्पेक्ट्रम • स्वायत्त डिजिटल मीडिया और भावना विश्लेषण खुफिया इंजन",
    footerSubtitle: "वास्तविक समय क्रॉस-मीडिया स्वचालित क्रॉलिंग, भावना वर्गीकरण और प्रतिक्रिया मंच",
  },
  Punjabi: {
    topBanner: "ਆਟੋਨੋਮਸ ਮੀਡੀਆ ਨਿਗਰਾਨੀ ਅਤੇ ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਭਾਵਨਾ ਵਿਸ਼ਲੇਸ਼ਣ ਪਲੇਟਫਾਰਮ",
    liveStream: "ਲਾਈਵ ਮੀਡੀਆ ਸਟ੍ਰੀਮ",
    syncIn: "ਸਿੰਕ ਬਾਕੀ",
    sync: "ਸਿੰਕ ਕਰੋ",
    syncing: "ਸਿੰਕ ਹੋ ਰਿਹਾ ਹੈ...",
    brandSubtitle: "ਡਿਜੀਟਲ ਮੀਡੀਆ ਅਤੇ ਭਾਵਨਾ ਵਿਸ਼ਲੇਸ਼ਣ ਇੰਜਣ",
    tabNewsFeed: "ਖ਼ਬਰਾਂ ਫੀਡ",
    tabAnalytics: "ਵਿਸ਼ਲੇਸ਼ਣ",
    tabAlertsHub: "ਅਲਰਟ ਕੇਂਦਰ",
    tabVideoStudio: "ਵੀਡੀਓ ਸਟੂਡੀਓ",
    tabAiPlayground: "ਏਆਈ ਪਲੇਅਗ੍ਰਾਊਂਡ",
    kpiIngestedTitle: "ਇਕੱਤਰ ਖ਼ਬਰਾਂ",
    kpiIngestedSub: "ਆਟੋਨੋਮਸ ਮੀਡੀਆ ਸਕੈਨ",
    kpiPositiveTitle: "ਹਾਂ-ਪੱਖੀ ਰੁਝਾਨ",
    kpiPositiveSub: "ਅਨੁਕੂਲ ਖ਼ਬਰਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ",
    kpiAdverseTitle: "ਗੰਭੀਰ ਘਟਨਾਵਾਂ",
    kpiAdverseSub: "ਨਕਾਰਾਤਮਕ ਸਕੋਰ ≥ 0.50",
    kpiAdverseUrgent: "ਜ਼ਰੂਰੀ",
    kpiSectorsTitle: "ਨਿਗਰਾਨੀ ਅਧੀਨ ਖੇਤਰ",
    kpiSectorsSub: "ਸਵੈਚਾਲਤ ਵਰਗੀਕਰਨ",
    searchPlaceholder: "ਖ਼ਬਰਾਂ, ਖੇਤਰ, ਵਿਸ਼ੇ ਜਾਂ ਕੀਵਰਡ ਖੋਜੋ...",
    pullLiveRss: "ਲਾਈਵ RSS ਖ਼ਬਰਾਂ ਲਿਆਓ",
    pullingLiveRss: "ਖ਼ਬਰਾਂ ਲਿਆ ਰਹੇ ਹਾਂ...",
    exportBrief: "ਸੰਖੇਪ ਡਾਊਨਲੋਡ ਕਰੋ",
    filterTopic: "ਵਿਸ਼ਾ:",
    filterPolarity: "ਭਾਵਨਾ:",
    all: "ਸਾਰੇ",
    showingStories: "{count} ਖ਼ਬਰਾਂ ਦਰਜ ਹਨ",
    pageOf: "ਪੰਨਾ {page} / {total}",
    prev: "ਪਿਛਲਾ",
    next: "ਅਗਲਾ",
    noArticlesFound: "ਕੋਈ ਖ਼ਬਰ ਮਾਪਦੰਡਾਂ ਨਾਲ ਮੇਲ ਨਹੀਂ ਖਾਂਦੀ।",
    catTechnology: "ਤਕਨਾਲੋਜੀ",
    catBusiness: "ਵਪਾਰ",
    catPolitics: "ਰਾਜਨੀਤੀ",
    catJudiciary: "ਨਿਆਂਪਾਲਿਕਾ",
    catScience: "ਵਿਗਿਆਨ",
    catSports: "ਖੇਡਾਂ",
    catEntertainment: "ਮਨੋਰੰਜਨ",
    catInternational: "ਅੰਤਰਰਾਸ਼ਟਰੀ",
    catCulture: "ਸੱਭਿਆਚਾਰ",
    catCrime: "ਜੁਰਮ",
    sentPositive: "ਹਾਂ-ਪੱਖੀ",
    sentNeutral: "ਨਿਰਪੱਖ",
    sentNegative: "ਨਾਂਹ-ਪੱਖੀ",
    adverseAlert: "ਗੰਭੀਰ ਚੇਤਾਵਨੀ",
    draftRebuttal: "ਜਵਾਬ ਤਿਆਰ ਕਰੋ",
    notifyLiaison: "ਅਧਿਕਾਰੀ ਨੂੰ ਸੂਚਿਤ ਕਰੋ",
    notified: "ਸੂਚਿਤ ਕੀਤਾ ਗਿਆ",
    source: "ਸਰੋਤ",
    minRead: "ਮਿੰਟ ਪੜ੍ਹਨ ਦਾ ਸਮਾਂ",
    readMore: "ਹੋਰ ਪੜ੍ਹੋ",
    showLess: "ਘੱਟ ਦਿਖਾਓ",
    rebuttalTitle: "ਏਆਈ ਮੀਡੀਆ ਸਪਸ਼ਟੀਕਰਨ ਡਰਾਫਟਰ",
    rebuttalSubtitle: "ਗਲਤ ਰਿਪੋਰਟਿੰਗ ਦੇ ਵਿਰੁੱਧ ਸਵੈਚਾਲਤ ਪ੍ਰੈਸ ਨੋਟ ਤਿਆਰੀ",
    copyStatement: "ਬਿਆਨ ਕਾਪੀ ਕਰੋ",
    copied: "ਕਾਪੀ ਹੋ ਗਿਆ!",
    dispatchPressDesk: "ਪ੍ਰੈਸ ਡੈਸਕ ਨੂੰ ਭੇਜੋ",
    alertsHubTitle: "ਘਟਨਾ ਪ੍ਰਬੰਧਨ ਹੱਬ",
    alertsHubSubtitle: "ਨਕਾਰਾਤਮਕ ਖ਼ਬਰਾਂ ਲਈ ਸਵੈਚਾਲਤ ਅਲਰਟ। ਸਬੰਧਤ ਅਧਿਕਾਰੀ ਨੂੰ ਤੁਰੰਤ ਭੇਜੋ।",
    urgentIncidents: "ਗੰਭੀਰ ਘਟਨਾਵਾਂ",
    dispatchAllPending: "ਸਾਰੇ ਬਕਾਇਆ ਅਲਰਟ ਭੇਜੋ",
    dispatchAlert: "ਅਲਰਟ ਭੇਜੋ",
    videoStudioTitle: "ਪ੍ਰਸਾਰਣ ਵੀਡੀਓ ਸਟੂਡੀਓ",
    videoStudioSubtitle: "ਸਵੈਚਾਲਤ ਆਵਾਜ਼ ਤੋਂ ਲਿਖਤ ਅਤੇ ਭਾਵਨਾ ਵਿਸ਼ਲੇਸ਼ਣ",
    ingestedBroadcasts: "ਇਕੱਤਰ ਵੀਡੀਓ ਪ੍ਰਸਾਰਣ",
    aiPlaygroundTitle: "ਰੀਅਲ-ਟਾਈਮ ਏਆਈ ਪਲੇਅਗ੍ਰਾਊਂਡ",
    aiPlaygroundSubtitle: "ਕਸਟਮ ਸੁਰਖੀਆਂ ਅਤੇ ਸਮੱਗਰੀ ਦਾ ਤੁਰੰਤ ਮਾਡਲ ਟੈਸਟਿੰਗ",
    testHeadline: "ਸੁਰਖੀ",
    testBody: "ਖ਼ਬਰ ਸਮੱਗਰੀ",
    runInference: "ਏਆਈ ਵਿਸ਼ਲੇਸ਼ਣ ਚਲਾਓ",
    langSwitchedToast: "ਭਾਸ਼ਾ ਬਦਲ ਕੇ ਪੰਜਾਬੀ ਕੀਤੀ ਗਈ",
    alertDispatchedToast: "ਅਧਿਕਾਰੀ ਨੂੰ ਅਲਰਟ ਭੇਜਿਆ ਗਿਆ:",
    briefDownloadedToast: "ਸੰਖੇਪ ਰਿਪੋਰਟ ਸਫਲਤਾਪੂਰਵਕ ਡਾਊਨਲੋਡ ਹੋਈ",
    footerTitle: "ਸਪੈਕਟ੍ਰਮ • ਆਟੋਨੋਮਸ ਡਿਜੀਟਲ ਮੀਡੀਆ ਅਤੇ ਭਾਵਨਾ ਵਿਸ਼ਲੇਸ਼ਣ ਇੰਜਣ",
    footerSubtitle: "ਰੀਅਲ-ਟਾਈਮ ਮੀਡੀਆ ਨਿਗਰਾਨੀ ਅਤੇ ਭਾਵਨਾ ਵਰਗੀਕਰਨ ਪਲੇਟਫਾਰਮ",
  },
  Bengali: {
    topBanner: "স্বয়ংক্রিয় মিডিয়া পর্যবেক্ষণ ও প্রাকৃতিক ভাষা সেন্টিমেন্ট অ্যানালিসিস প্ল্যাটফর্ম",
    liveStream: "লাইভ মিডিয়া স্ট্রিম",
    syncIn: "সিঙ্ক বাকি",
    sync: "সিঙ্ক করুন",
    syncing: "সিঙ্ক হচ্ছে...",
    brandSubtitle: "ডিজিটাল মিডিয়া ও সেন্টিমেন্ট ইন্টেলিজেন্স ইঞ্জিন",
    tabNewsFeed: "সংবাদ ফিড",
    tabAnalytics: "অ্যানালিটিক্স",
    tabAlertsHub: "সতর্কতা কেন্দ্র",
    tabVideoStudio: "ভিডিও স্টুডিও",
    tabAiPlayground: "এআই প্লেগ্রাউন্ড",
    kpiIngestedTitle: "সংগৃহীত সংবাদ",
    kpiIngestedSub: "স্বয়ংক্রিয় ক্রস-মিডিয়া স্ক্যান",
    kpiPositiveTitle: "ইতিবাচক মনোভাব",
    kpiPositiveSub: "অনুকূল সংবাদ প্রতিবেদন",
    kpiAdverseTitle: "প্রতিকূল ঘটনা",
    kpiAdverseSub: "নেতিবাচক স্কোর ≥ 0.50",
    kpiAdverseUrgent: "জরুরি",
    kpiSectorsTitle: "নজরদারি করা খাত",
    kpiSectorsSub: "স্বয়ংক্রিয় বিষয় বিন্যাস",
    searchPlaceholder: "সংবাদ, ক্ষেত্র, বিষয় বা কীওয়ার্ড অনুসন্ধান করুন...",
    pullLiveRss: "লাইভ RSS সংবাদ আনুন",
    pullingLiveRss: "সংবাদ আনা হচ্ছে...",
    exportBrief: "সংক্ষিপ্ত বিবরণ ডাউনলোড করুন",
    filterTopic: "বিষয়:",
    filterPolarity: "মনোভাব:",
    all: "সব",
    showingStories: "{count} টি সংবাদ প্রদর্শিত",
    pageOf: "পৃষ্ঠা {page} / {total}",
    prev: "পূর্ববর্তী",
    next: "পরবর্তী",
    noArticlesFound: "নির্দিষ্ট শর্তের সাথে মিল থাকা কোনো সংবাদ পাওয়া যায়নি।",
    catTechnology: "প্রযুক্তি",
    catBusiness: "ব্যবসা",
    catPolitics: "রাজনীতি",
    catJudiciary: "বিচার বিভাগ",
    catScience: "বিজ্ঞান",
    catSports: "খেলাধুলা",
    catEntertainment: "বিনোদন",
    catInternational: "আন্তর্জাতিক",
    catCulture: "সংস্কৃতি",
    catCrime: "অপরাধ",
    sentPositive: "ইতিবাচক",
    sentNeutral: "নিরপেক্ষ",
    sentNegative: "নেতিবাচক",
    adverseAlert: "প্রতিকূল সতর্কতা",
    draftRebuttal: "খণ্ডন তৈরি করুন",
    notifyLiaison: "কর্মকর্তাকে জানান",
    notified: "জানানো হয়েছে",
    source: "উৎস",
    minRead: "মিনিট পড়ার সময়",
    readMore: "আরও পড়ুন",
    showLess: "কম দেখুন",
    rebuttalTitle: "এআই মিডিয়া স্পষ্টীকরণ ও খণ্ডন",
    rebuttalSubtitle: "ভুল বা অসত্য সংবাদের বিরুদ্ধে প্রেস বিবৃতি তৈরি",
    copyStatement: "বিবৃতি কপি করুন",
    copied: "কপি হয়েছে!",
    dispatchPressDesk: "প্রেস ডেস্কে পাঠান",
    alertsHubTitle: "জরুরি ঘটনা ব্যবস্থাপনা কেন্দ্র",
    alertsHubSubtitle: "নেতিবাচক স্কোরের খবরের জন্য স্বয়ংক্রিয় সতর্কতা। সংশ্লিষ্ট কর্মকর্তাকে সরাসরি প্রেরণ।",
    urgentIncidents: "জরুরি ঘটনা",
    dispatchAllPending: "সব সতর্কতা পাঠান",
    dispatchAlert: "সতর্কতা পাঠান",
    videoStudioTitle: "সম্প্রচার ভিডিও স্টুডিও",
    videoStudioSubtitle: "স্বয়ংক্রিয় ভয়েস-টু-টেক্সট রূপান্তর এবং সেন্টিমেন্ট ট্র্যাকিং",
    ingestedBroadcasts: "সংগৃহীত ভিডিও সম্প্রচার",
    aiPlaygroundTitle: "রিয়েল-টাইম এআই প্লেগ্রাউন্ড",
    aiPlaygroundSubtitle: "শিরোনাম এবং খবরের বিষয়বস্তু দিয়ে এআই মডেল পরীক্ষা করুন",
    testHeadline: "শিরোনাম",
    testBody: "সংবাদের মূল বিষয়",
    runInference: "এআই বিশ্লেষণ চালান",
    langSwitchedToast: "ভাষা পরিবর্তন করে বাংলা করা হয়েছে",
    alertDispatchedToast: "কর্মকর্তাকে সতর্কতা পাঠানো হয়েছে:",
    briefDownloadedToast: "সংক্ষিপ্ত বিবরণ ডাউনলোড সম্পন্ন হয়েছে",
    footerTitle: "স্পেকট্রাম • ডিজিটাল মিডিয়া ও সেন্টিমেন্ট ইন্টেলিজেন্স প্ল্যাটফর্ম",
    footerSubtitle: "রিয়েল-টাইম ক্রস-মিডিয়া স্বয়ংক্রিয় ক্রলিং ও সেন্টিমেন্ট ট্র্যাকিং",
  },
  Tamil: {
    topBanner: "தன்னாட்சி ஊடக கண்காணிப்பு மற்றும் இயற்கை மொழி உணர்வு நுண்ணறிவு தளம்",
    liveStream: "நேரலை ஊடக ஸ்ட்ரீம்",
    syncIn: "ஒத்திசைவு",
    sync: "ஒத்திசை",
    syncing: "ஒத்திசைக்கிறது...",
    brandSubtitle: "டிஜிட்டல் மீடியா மற்றும் உணர்வு நுண்ணறிவு இயந்திரம்",
    tabNewsFeed: "செய்தி ஊட்டம்",
    tabAnalytics: "பகுப்பாய்வு",
    tabAlertsHub: "எச்சரிக்கை மையம்",
    tabVideoStudio: "வீடியோ ஸ்டுடியோ",
    tabAiPlayground: "AI விளையாட்டு அரங்கம்",
    kpiIngestedTitle: "சேகரிக்கப்பட்ட செய்திகள்",
    kpiIngestedSub: "தானியங்கி ஊடக ஸ்கேன்",
    kpiPositiveTitle: "நேர்மறை உணர்வு",
    kpiPositiveSub: "சாதகமான செய்திகள்",
    kpiAdverseTitle: "பாதகமான நிகழ்வுகள்",
    kpiAdverseSub: "எதிர்மறை மதிப்பெண் ≥ 0.50",
    kpiAdverseUrgent: "அவசரம்",
    kpiSectorsTitle: "கண்காணிக்கப்படும் துறைகள்",
    kpiSectorsSub: "தானியங்கி வகைப்பாடு",
    searchPlaceholder: "செய்திகள், துறைகள் அல்லது முக்கிய வார்த்தைகளைத் தேடுங்கள்...",
    pullLiveRss: "நேரடி RSS செய்திகளைப் பெறுக",
    pullingLiveRss: "செய்திகள் பெறப்படுகின்றன...",
    exportBrief: "சுருக்கத்தைப் பதிவிறக்குக",
    filterTopic: "துறை:",
    filterPolarity: "உணர்வு:",
    all: "அனைத்தும்",
    showingStories: "{count} செய்திகள் காட்டப்படுகின்றன",
    pageOf: "பக்கம் {page} / {total}",
    prev: "முந்தைய",
    next: "அடுத்தது",
    noArticlesFound: "தேடல் முடிவுகள் எதுவும் கிடைக்கவில்லை.",
    catTechnology: "தொழில்நுட்பம்",
    catBusiness: "வணிகம்",
    catPolitics: "அரசியல்",
    catJudiciary: "நீதித்துறை",
    catScience: "அறிவியல்",
    catSports: "விளையாட்டு",
    catEntertainment: "பொழுதுபோக்கு",
    catInternational: "சர்வதேசம்",
    catCulture: "கலாச்சாரம்",
    catCrime: "குற்றப்பிரிவு",
    sentPositive: "நேர்மறை",
    sentNeutral: "நடுநிலை",
    sentNegative: "எதிர்மறை",
    adverseAlert: "எச்சரிக்கை",
    draftRebuttal: "மறுப்பு வரைவு",
    notifyLiaison: "அதிகாரிக்கு தெரிவிக்கவும்",
    notified: "தெரிவிக்கப்பட்டது",
    source: "மூலம்",
    minRead: "நிமிட வாசிப்பு",
    readMore: "மேலும் படிக்க",
    showLess: "குறைவாகக் காட்டு",
    rebuttalTitle: "AI ஊடக மறுப்பு மற்றும் தெளிவுபடுத்தல்",
    rebuttalSubtitle: "தவறான தகவல்களை எதிர்கொள்ள உடனடி அறிக்கை தயாரிப்பு",
    copyStatement: "நகலெடு",
    copied: "நகலெடுக்கப்பட்டது!",
    dispatchPressDesk: "பத்திரிகை பிரிவுக்கு அனுப்புக",
    alertsHubTitle: "நிகழ்வு கண்காணிப்பு மையம்",
    alertsHubSubtitle: "எதிர்மறை செய்திகளுக்கான தானியங்கி எச்சரிக்கை மற்றும் அதிகாரிகளுக்கு உடனடி தகவல்.",
    urgentIncidents: "அவசர நிகழ்வுகள்",
    dispatchAllPending: "அனைத்து எச்சரிக்கைகளையும் அனுப்புக",
    dispatchAlert: "எச்சரிக்கை அனுப்புக",
    videoStudioTitle: "வீடியோ ஸ்டுடியோ",
    videoStudioSubtitle: "பேச்சிலிருந்து உரை மாற்றம் மற்றும் உணர்வுப் பகுப்பாய்வு",
    ingestedBroadcasts: "சேகரிக்கப்பட்ட ஒளிபரப்புகள்",
    aiPlaygroundTitle: "AI மாதிரி அரங்கம்",
    aiPlaygroundSubtitle: "செய்தித் தலைப்புகளை உடனடி பகுப்பாய்வு செய்து சோதிக்கவும்",
    testHeadline: "தலைப்பு",
    testBody: "செய்தி உள்ளடக்கம்",
    runInference: "பகுப்பாய்வை இயக்கு",
    langSwitchedToast: "மொழி தமிழுக்கு மாற்றப்பட்டது",
    alertDispatchedToast: "அதிகாரிக்கு எச்சரிக்கை அனுப்பப்பட்டது:",
    briefDownloadedToast: "சுருக்க அறிக்கை பதிவிறக்கப்பட்டது",
    footerTitle: "ஸ்பெக்ட்ரம் • தன்னாட்சி ஊடக கண்காணிப்பு தளம்",
    footerSubtitle: "நிகழ்நேர ஊடக கண்காணிப்பு மற்றும் உணர்வு வகைப்பாடு",
  },
  Telugu: {
    topBanner: "స్వయంప్రతిపత్తి మీడియా పర్యవేక్షణ మరియు సహజ భాష సెంటిమెంట్ విశ్లేషణ వేదిక",
    liveStream: "లైవ్ మీడియా స్ట్రీమ్",
    syncIn: "సింక్ సమయం",
    sync: "సింక్ చేయండి",
    syncing: "సింక్ అవుతోంది...",
    brandSubtitle: "డిజిటల్ మీడియా మరియు సెంటిమెంట్ ఇంటెలిజెన్స్ ఇంజిన్",
    tabNewsFeed: "వార్తల ఫీడ్",
    tabAnalytics: "విశ్లేషణలు",
    tabAlertsHub: "హెచ్చరిక కేంద్రం",
    tabVideoStudio: "వీడియో స్టూడియో",
    tabAiPlayground: "AI ప్లేగ్రౌండ్",
    kpiIngestedTitle: "సేకరించిన వార్తలు",
    kpiIngestedSub: "స్వయంప్రతిపత్తి మీడియా స్కాన్",
    kpiPositiveTitle: "సానుకూల ధోరణి",
    kpiPositiveSub: "అనుకూల వార్తా కథనాలు",
    kpiAdverseTitle: "ప్రతికూల సంఘటనలు",
    kpiAdverseSub: "ప్రతికూల స్కోరు ≥ 0.50",
    kpiAdverseUrgent: "అత్యవసరం",
    kpiSectorsTitle: "పర్యవేక్షించబడే రంగాలు",
    kpiSectorsSub: "ఆటోమేటెడ్ వర్గీకరణ",
    searchPlaceholder: "వార్తలు, విభాగాలు లేదా కీలక పదాలను శోధించండి...",
    pullLiveRss: "లైవ్ RSS వార్తలను పొందండి",
    pullingLiveRss: "వార్తలు తెస్తున్నాము...",
    exportBrief: "సారాంశాన్ని డౌన్‌లోడ్ చేయండి",
    filterTopic: "విభాగం:",
    filterPolarity: "సెంటిమెంట్:",
    all: "అన్నీ",
    showingStories: "{count} వార్తలు చూపబడుతున్నాయి",
    pageOf: "పేజీ {page} / {total}",
    prev: "మునుపటి",
    next: "తదుపరి",
    noArticlesFound: "మీ శోధనకు తగిన వార్తలు కనుగొనబడలేదు.",
    catTechnology: "సాంకేతికత",
    catBusiness: "వ్యాపారం",
    catPolitics: "రాజకీయాలు",
    catJudiciary: "న్యాయవ్యవస్థ",
    catScience: "సైన్స్",
    catSports: "క్రీడలు",
    catEntertainment: "వినోదం",
    catInternational: "అంతర్జాతీయం",
    catCulture: "సంస్కృతి",
    catCrime: "నేరం",
    sentPositive: "సానుకూలం",
    sentNeutral: "తటస్థం",
    sentNegative: "ప్రతికూలం",
    adverseAlert: "ప్రతికూల హెచ్చరిక",
    draftRebuttal: "ఖండన సిద్ధం చేయండి",
    notifyLiaison: "అధికారికి తెలపండి",
    notified: "తెలియజేయబడింది",
    source: "మూలం",
    minRead: "నిమిషాల సమయం",
    readMore: "మరింత చదవండి",
    showLess: "తక్కువ చూపించు",
    rebuttalTitle: "AI మీడియా వివరణ మరియు ఖండన డ్రాఫ్టర్",
    rebuttalSubtitle: "తప్పుదోవ పట్టించే నివేదికలకు అధికారిక ప్రెస్ నోట్ రూపకల్పన",
    copyStatement: "ప్రకటనను కాపీ చేయండి",
    copied: "కాపీ చేయబడింది!",
    dispatchPressDesk: "ప్రెస్ డెస్క్‌కు పంపండి",
    alertsHubTitle: "సంఘటన నిర్వహణ మరియు హెచ్చరిక కేంద్రం",
    alertsHubSubtitle: "ప్రతికూల వార్తలకు స్వయంచాలక గుర్తింపు. సంబంధిత అధికారికి తక్షణ హెచ్చరిక.",
    urgentIncidents: "అత్యవసర సంఘటనలు",
    dispatchAllPending: "అన్ని పెండింగ్ హెచ్చరికలను పంపండి",
    dispatchAlert: "హెచ్చరిక పంపండి",
    videoStudioTitle: "వీడియో స్టూడియో",
    videoStudioSubtitle: "స్వయంచాలక వాయిస్-టు-టెక్స్ట్ మరియు సెంటిమెంట్ విశ్లేషణ",
    ingestedBroadcasts: "సేకరించిన వీడియో ప్రసారాలు",
    aiPlaygroundTitle: "AI మోడల్ ప్లేగ్రౌండ్",
    aiPlaygroundSubtitle: "వార్తా ముఖ్యాంశాలను నిజ సమయంలో పరీక్షించి ఫలితాలను పొందండి",
    testHeadline: "శీర్షిక",
    testBody: "వార్తా వివరాలు",
    runInference: "AI విశ్లేషణను ప్రారంభించండి",
    langSwitchedToast: "భాష తెలుగులోకి మార్చబడింది",
    alertDispatchedToast: "అధికారికి హెచ్చరిక పంపబడింది:",
    briefDownloadedToast: "సారాంశం విజయవంతంగా డౌన్‌లోడ్ చేయబడింది",
    footerTitle: "స్పెక్ట్రమ్ • స్వయంప్రతిపత్తి డిజిటల్ మీడియా ఇంటెలిజెన్స్ ఇంజిన్",
    footerSubtitle: "నిజ-సమయ మీడియా పర్యవేక్షణ మరియు సెంటిమెంట్ వర్గీకరణ ప్లాట్‌ఫారమ్",
  },
};

// Map of popular article titles translated for deep localization
export const ARTICLE_TRANSLATIONS: Record<
  number,
  Record<SupportedLanguage, { title: string; body: string }>
> = {
  1: {
    English: {
      title: "Free Speech Protections Upheld: High Court Quashes Plea Over Public Discourse",
      body: "The High Court delivered a landmark ruling affirming that bona fide public discourse and critique cannot be conflated with hate speech. The bench dismissed the petition emphasizing fundamental constitutional protections.",
    },
    Hindi: {
      title: "अभिव्यक्ति की स्वतंत्रता को बरकरार रखा: उच्च न्यायालय ने सार्वजनिक बहस पर याचिका खारिज की",
      body: "उच्च न्यायालय ने ऐतिहासिक फैसला सुनाते हुए पुष्टि की कि वास्तविक सार्वजनिक विमर्श को घृणास्पद भाषण के साथ नहीं जोड़ा जा सकता। पीठ ने मौलिक संवैधानिक अधिकारों पर जोर देते हुए याचिका खारिज की।",
    },
    Punjabi: {
      title: "ਬੋਲਣ ਦੀ ਆਜ਼ਾਦੀ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਿਆ: ਹਾਈ ਕੋਰਟ ਨੇ ਜਨਤਕ ਬਹਿਸ ਬਾਰੇ ਪਟੀਸ਼ਨ ਰੱਦ ਕੀਤੀ",
      body: "ਹਾਈ ਕੋਰਟ ਨੇ ਇਤਿਹਾਸਕ ਫੈਸਲਾ ਸੁਣਾਉਂਦਿਆਂ ਕਿਹਾ ਕਿ ਜਨਤਕ ਵਿਚਾਰ-ਵਟਾਂਦਰੇ ਨੂੰ ਨਫ਼ਰਤੀ ਭਾਸ਼ਣ ਨਾਲ ਨਹੀਂ ਜੋੜਿਆ ਜਾ ਸਕਦਾ। ਅਦਾਲਤ ਨੇ ਸੰਵਿਧਾਨਕ ਹੱਕਾਂ 'ਤੇ ਜ਼ੋਰ ਦਿੱਤਾ।",
    },
    Bengali: {
      title: "বাকস্বাধীনতার সুরক্ষা বহাল: জনবিতর্ক সংক্রান্ত আবেদন খারিজ করল হাইকোর্ট",
      body: "হাইকোর্ট একটি যুগান্তকারী রায় প্রদান করে জানিয়েছে যে বাস্তবসম্মত জনবিতর্ককে ঘৃণাত্মক বক্তব্যের সাথে গুলিয়ে ফেলা যাবে না। সাংবিধানিক সুরক্ষার ওপর জোর দিয়ে আবেদন খারিজ করা হয়।",
    },
    Tamil: {
      title: "பேச்சுரிமை பாதுகாப்பு உறுதி: பொது விவாதம் மீதான மனுவை உயர்நீதிமன்றம் தள்ளுபடி செய்தது",
      body: "உயர்நீதிமன்றம் வரலாற்று சிறப்புமிக்க தீர்ப்பை வழங்கி, நியாயமான பொது விவாதங்களை வெறுப்புப் பேச்சாகக் கருத முடியாது என உறுதிப்படுத்தியது.",
    },
    Telugu: {
      title: "వాక్ స్వాతంత్య్ర పరిరక్షణ ఖరారు: బహిరంగ చర్చపై పిటిషన్‌ను కొట్టివేసిన హైకోర్టు",
      body: "హైకోర్టు చరిత్రాత్మక తీర్పునిస్తూ, న్యాయమైన బహిరంగ చర్చలను ద్వేషపూరిత ప్రసంగాలుగా పరిగణించలేమని పేర్కొంటూ పిటిషన్‌ను కొట్టివేసింది.",
    },
  },
  2: {
    English: {
      title: "Rail Safety Audit Flags Signal Modernization Delay on High-Density Corridors",
      body: "A high-level inspection audit has highlighted urgent maintenance requirements across central track divisions, warning that delayed replacement of automatic signaling hardware poses severe operational risks.",
    },
    Hindi: {
      title: "रेल सुरक्षा ऑडिट ने हाई-डेंसिटी कॉरिडोर पर सिग्नल आधुनिकीकरण में देरी की ओर ध्यान दिलाया",
      body: "एक उच्च स्तरीय निरीक्षण ऑडिट में ट्रैक डिवीजनों में तत्काल रखरखाव की आवश्यकता पर प्रकाश डाला गया है, चेतावनी दी गई है कि स्वचालित सिग्नलिंग में देरी परिचालन जोखिम पैदा करती है।",
    },
    Punjabi: {
      title: "ਰੇਲ ਸੁਰੱਖਿਆ ਆਡਿਟ ਨੇ ਸਿਗਨਲ ਆਧੁਨਿਕੀਕਰਨ ਵਿੱਚ ਦੇਰੀ 'ਤੇ ਚਿੰਤਾ ਪ੍ਰਗਟਾਈ",
      body: "ਇੱਕ ਉੱਚ-ਪੱਧਰੀ ਨਿਰੀਖਣ ਆਡਿਟ ਨੇ ਰੇਲਵੇ ਟ੍ਰੈਕਾਂ ਦੀ ਤੁਰੰਤ ਸਾਂਭ-ਸੰਭਾਲ ਦੀ ਲੋੜ ਨੂੰ ਉਜਾਗਰ ਕੀਤਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਚੇਤਾਵਨੀ ਦਿੱਤੀ ਗਈ ਹੈ ਕਿ ਦੇਰੀ ਕਾਰਨ ਗੰਭੀਰ ਜੋਖਮ ਹੋ ਸਕਦੇ ਹਨ।",
    },
    Bengali: {
      title: "রেল নিরাপত্তা অডিটে সিগন্যাল আধুনিকীকরণে বিলম্বের বিষয়ে সতর্কতা",
      body: "উচ্চপর্যায়ের একটি পরিদর্শন অডিট ট্র্যাকের জরুরি রক্ষণাবেক্ষণের প্রয়োজনীয়তা তুলে ধরেছে এবং সতর্ক করেছে যে বিলম্বিত সিগন্যালিং প্রতিস্থাপন মারাত্মক ঝুঁকি তৈরি করতে পারে।",
    },
    Tamil: {
      title: "ரயில்வே பாதுகாப்பு தணிக்கை: சிக்னல் நவீனமயமாக்கலில் தாமதம் என எச்சரிக்கை",
      body: "உயர்மட்ட ஆய்வுத் தணிக்கையில் ரயில்வே சிக்னல் கருவிகளை மாற்றுவதில் ஏற்பட்டுள்ள தாமதம் கடுமையான செயல்பாட்டு அபாயங்களை ஏற்படுத்துகிறது என எச்சரிக்கப்பட்டுள்ளது.",
    },
    Telugu: {
      title: "రైల్వే భద్రతా ఆడిట్: సిగ్నల్ ఆధునీకరణ ఆలస్యంపై ఆందోళన",
      body: "ఉన్నత స్థాయి తనిఖీ ఆడిట్ ట్రాక్ విభాగాలలో అత్యవసర నిర్వహణ అవసరాలను స్పష్టం చేసింది. ఆటోమేటిక్ సిగ్నలింగ్ మార్పిడిలో ఆలస్యం ప్రమాదాలకు దారితీయవచ్చని హెచ్చరించింది.",
    },
  },
  3: {
    English: {
      title: "Enterprise Council Clears $10 Billion Incentive Framework to Expand Semiconductor Fabs",
      body: "In a major push toward indigenous electronics manufacturing, executive leadership has approved a renewed financial outlay for microchip wafer fabrication plants, projected to catalyze 50,000 engineering jobs.",
    },
    Hindi: {
      title: "सेमीकंडक्टर निर्माण के विस्तार के लिए 10 बिलियन डॉलर के प्रोत्साहन ढांचे को मंजूरी",
      body: "स्वदेशी इलेक्ट्रॉनिक्स विनिर्माण को गति देने के लिए माइक्रोचिप फैब्रिकेशन संयंत्रों हेतु वित्तीय प्रोत्साहन स्वीकृत किया गया है, जिससे 50,000 इंजीनियरिंग नौकरियों के सृजन की संभावना है।",
    },
    Punjabi: {
      title: "ਸੈਮੀਕੰਡਕਟਰ ਵਿਸਥਾਰ ਲਈ $10 ਬਿਲੀਅਨ ਪ੍ਰੋਤਸਾਹਨ ਯੋਜਨਾ ਨੂੰ ਮਨਜ਼ੂਰੀ",
      body: "ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਨਿਰਮਾਣ ਨੂੰ ਹੁਲਾਰਾ ਦੇਣ ਲਈ ਮਾਈਕ੍ਰੋਚਿੱਪ ਪਲਾਂਟਾਂ ਲਈ ਵਿੱਤੀ ਸਹਾਇਤਾ ਮਨਜ਼ੂਰ ਕੀਤੀ ਗਈ ਹੈ, ਜਿਸ ਨਾਲ 50,000 ਨੌਕਰੀਆਂ ਪੈਦਾ ਹੋਣ ਦੀ ਉਮੀਦ ਹੈ।",
    },
    Bengali: {
      title: "সেমিকন্ডাক্টর সম্প্রসারণে ১০ বিলিয়ন ডলারের প্রণোদনা প্যাকেজ অনুমোদন",
      body: "দেশীয় ইলেকট্রনিক্স উৎপাদনে গতি আনতে মাইক্রোচিপ ফ্যাব্রিকেশন প্ল্যান্টের জন্য আর্থিক সহায়তা অনুমোদিত হয়েছে, যা ৫০,০০০ কর্মসংস্থান সৃষ্টি করবে।",
    },
    Tamil: {
      title: "செமிகண்டக்டர் ஆலை விரிவாக்கத்திற்கு $10 பில்லியன் ஊக்கத்தொகை ஒப்புதல்",
      body: "உள்நாட்டு மின்னணு உற்பத்தியை ஊக்குவிக்க மைக்ரோசிப் ஆலைகளுக்கு நிதி ஒதுக்கீடு அங்கீகரிக்கப்பட்டுள்ளது, இது 50,000 வேலைவாய்ப்புகளை உருவாக்கும்.",
    },
    Telugu: {
      title: "సెమీకండక్టర్ తయారీ విస్తరణకు $10 బిలియన్ల ప్రోత్సాహకాల ఆమోదం",
      body: "దేశీయ ఎలక్ట్రానిక్స్ రంగాన్ని ప్రోత్సహించడానికి మైక్రోచిప్ ఫ్యాబ్రికేషన్ ప్లాంట్ల కోసం భారీ నిధులు మంజూరు చేయబడ్డాయి. ఇది 50,000 ఉద్యోగాలను సృష్టించనుంది.",
    },
  },
  4: {
    English: {
      title: "Power Grid Reliability Study Warns of Summer Peak Shortfalls Across Northern States",
      body: "Regional transmission reports advise that delayed commissioning of pumped hydro storage units could strain baseline frequency controls during peak ambient temperatures.",
    },
    Hindi: {
      title: "पावर ग्रिड अध्ययन की चेतावनी: उत्तरी राज्यों में गर्मियों के पीक समय बिजली की कमी संभव",
      body: "क्षेत्रीय ट्रांसमिशन रिपोर्ट में सलाह दी गई है कि पंप किए गए हाइड्रो स्टोरेज में देरी से अत्यधिक तापमान के दौरान ग्रिड फ्रीक्वेंसी पर दबाव पड़ सकता है।",
    },
    Punjabi: {
      title: "ਪਾਵਰ ਗਰਿੱਡ ਰਿਪੋਰਟ: ਗਰਮੀਆਂ ਵਿੱਚ ਬਿਜਲੀ ਸੰਕਟ ਦੀ ਚੇਤਾਵਨੀ",
      body: "ਟਰਾਂਸਮਿਸ਼ਨ ਰਿਪੋਰਟਾਂ ਅਨੁਸਾਰ ਪਣ-ਬਿਜਲੀ ਪ੍ਰੋਜੈਕਟਾਂ ਵਿੱਚ ਦੇਰੀ ਕਾਰਨ ਸਿਖਰਲੇ ਤਾਪਮਾਨ ਦੌਰਾਨ ਬਿਜਲੀ ਦੀ ਸਪਲਾਈ ਪ੍ਰਭਾਵਿਤ ਹੋ ਸਕਦੀ ਹੈ।",
    },
    Bengali: {
      title: "পাওয়ার গ্রিড রিপোর্ট: গ্রীষ্মকালীন সর্বোচ্চ চাহিদায় বিদ্যুৎ ঘাটতির আশঙ্কা",
      body: "আঞ্চলিক রিপোর্ট জানিয়েছে যে জলবিদ্যুৎ প্রকল্পের কমিশনিংয়ে বিলম্বের কারণে তীব্র তাপমাত্রায় গ্রিডের স্বাভাবিক ফ্রিকোয়েন্সি ব্যাহত হতে পারে।",
    },
    Tamil: {
      title: "மின் கட்டமைப்பு எச்சரிக்கை: கோடைகாலத்தில் வட மாநிலங்களில் மின் தட்டுப்பாடு அபாயம்",
      body: "நீரேற்று நீர்மின் திட்டப் பணிகளில் ஏற்பட்டுள்ள தாமதம் காரணமாக உச்ச வெப்பநிலையின் போது மின் விநியோகத்தில் பாதிப்பு ஏற்படலாம் என எச்சரிக்கப்பட்டுள்ளது.",
    },
    Telugu: {
      title: "పవర్ గ్రిడ్ అధ్యయనం: వేసవిలో విద్యుత్ కొరత హెచ్చరికలు",
      body: "హైడ్రో స్టోరేజ్ యూనిట్ల ప్రారంభంలో జాప్యం కారణంగా అధిక ఉష్ణోగ్రతల సమయంలో గ్రిడ్ ఫ్రీక్వెన్సీపై ఒత్తిడి పెరగవచ్చని నివేదికలు స్పష్టం చేస్తున్నాయి.",
    },
  },
  5: {
    English: {
      title: "Supreme Court Reserves Verdict on Cross-Border Data Flow & Digital Privacy Framework",
      body: "A five-judge constitutional bench heard final arguments regarding statutory safeguards under the Digital Personal Data Protection legislation, reserving judgment following extensive deliberations.",
    },
    Hindi: {
      title: "सुप्रीम कोर्ट ने सीमा-पार डेटा प्रवाह और डिजिटल गोपनीयता ढांचे पर फैसला सुरक्षित रखा",
      body: "पांच न्यायाधीशों की संविधान पीठ ने डिजिटल व्यक्तिगत डेटा संरक्षण कानून के तहत वैधानिक सुरक्षा उपायों पर अंतिम दलीलें सुनकर फैसला सुरक्षित रखा।",
    },
    Punjabi: {
      title: "ਸੁਪਰੀਮ ਕੋਰਟ ਨੇ ਡਿਜੀਟਲ ਪ੍ਰਾਈਵੇਸੀ ਅਤੇ ਡਾਟਾ ਪ੍ਰਵਾਹ 'ਤੇ ਫੈਸਲਾ ਰਾਖਵਾਂ ਰੱਖਿਆ",
      body: "ਪੰਜ ਜੱਜਾਂ ਦੇ ਸੰਵਿਧਾਨਕ ਬੈਂਚ ਨੇ ਨਿੱਜੀ ਡਾਟਾ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨ ਤਹਿਤ ਦਲੀਲਾਂ ਸੁਣਨ ਤੋਂ ਬਾਅਦ ਆਪਣਾ ਫੈਸਲਾ ਰਾਖਵਾਂ ਰੱਖ ਲਿਆ ਹੈ।",
    },
    Bengali: {
      title: "ডিজিটাল গোপনীয়তা ও ডেটা স্থানান্তর নিয়ে সুপ্রিম কোর্ট রায় স্থগিত রাখল",
      body: "ডিজিটাল ব্যক্তিগত ডেটা সুরক্ষা আইনের আওতায় বিধিবদ্ধ সুরক্ষাবিধি সম্পর্কে যুক্তি শুনে পাঁচ বিচারপতির সাংবিধানিক বেঞ্চ রায় স্থগিত রেখেছে।",
    },
    Tamil: {
      title: "டிஜிட்டல் தனியுரிமை கட்டமைப்பு மீதான தீர்ப்பை உச்ச நீதிமன்றம் ஒத்திவைத்தது",
      body: "டிஜிட்டல் தனிநபர் தரவு பாதுகாப்பு சட்டத்தின் கீழ் உள்ள விதிகள் குறித்து இறுதி வாதங்களைக் கேட்ட ஐந்து நீதிபதிகள் கொண்ட அமர்வு தீர்ப்பை ஒத்திவைத்தது.",
    },
    Telugu: {
      title: "డిజిటల్ ప్రైవసీ మరియు డేటా ప్రవాహంపై తీర్పును రిజర్వ్ చేసిన సుప్రీంకోర్టు",
      body: "డిజిటల్ వ్యక్తిగత డేటా రక్షణ చట్టం కింద నిబంధనలపై తుది వాదనలు విన్న ఐదుగురు న్యాయమూర్తుల రాజ్యాంగ ధర్మాసనం తీర్పును రిజర్వ్ చేసింది.",
    },
  },
  6: {
    English: {
      title: "Bilateral Clean Energy Transition Accord Finalized with International Partners",
      body: "Diplomatic delegations have finalized an extensive partnership targeting green hydrogen production, grid storage solutions, and reciprocal tariff easing for sustainable energy technology.",
    },
    Hindi: {
      title: "अंतर्राष्ट्रीय भागीदारों के साथ द्विपक्षीय स्वच्छ ऊर्जा संक्रमण समझौता संपन्न",
      body: "राजनयिक प्रतिनिधिमंडलों ने हरित हाइड्रोजन उत्पादन, ग्रिड भंडारण समाधान और टिकाऊ ऊर्जा प्रौद्योगिकी के लिए पारस्परिक साझेदारी को अंतिम रूप दिया।",
    },
    Punjabi: {
      title: "ਸਵੱਛ ਊਰਜਾ ਪਰਿਵਰਤਨ ਲਈ ਅੰਤਰਰਾਸ਼ਟਰੀ ਭਾਈਵਾਲਾਂ ਨਾਲ ਸਮਝੌਤਾ ਸੰਪੰਨ",
      body: "ਹਰੇ ਹਾਈਡ੍ਰੋਜਨ ਉਤਪਾਦਨ ਅਤੇ ਟਿਕਾਊ ਊਰਜਾ ਤਕਨਾਲੋਜੀ ਲਈ ਦੁਵੱਲੇ ਸਮਝੌਤੇ ਨੂੰ ਅੰਤਿਮ ਰੂਪ ਦਿੱਤਾ ਗਿਆ ਹੈ।",
    },
    Bengali: {
      title: "আন্তর্জাতিক অংশীদারদের সাথে পরিচ্ছন্ন শক্তি রূপান্তর চুক্তি চূড়ান্ত",
      body: "সবুজ হাইড্রোজেন উৎপাদন এবং টেকসই শক্তি প্রযুক্তির ওপর বিস্তৃত অংশীদারিত্ব চূড়ান্ত করেছে কূটনৈতিক প্রতিনিধি দল।",
    },
    Tamil: {
      title: "சர்வதேச கூட்டாளர்களுடன் தூய எரிசக்தி ஒப்பந்தம் கையெழுத்தானது",
      body: "பசுமை ஹைட்ரஜன் உற்பத்தி மற்றும் நிலையான ஆற்றல் தொழில்நுட்பத்திற்காக இருதரப்பு கூட்டாண்மை இறுதி செய்யப்பட்டுள்ளது.",
    },
    Telugu: {
      title: "అంతర్జాతీయ భాగస్వాములతో ద్వైపాక్షిక స్వచ్ఛ ఇంధన ఒప్పందం ఖరారు",
      body: "గ్రీన్ హైడ్రోజన్ ఉత్పత్తి మరియు గ్రిడ్ నిల్వ పరిష్కారాల కోసం సమగ్ర భాగస్వామ్యాన్ని దౌత్య బృందాలు ఖరారు చేశాయి.",
    },
  },
};

/**
 * Returns localized string for a category key
 */
export function getLocalizedCategory(category: string, lang: SupportedLanguage): string {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.English;
  const key = category.trim().toLowerCase();
  switch (key) {
    case "all":
      return t.all;
    case "technology":
      return t.catTechnology;
    case "business":
      return t.catBusiness;
    case "politics":
      return t.catPolitics;
    case "judiciary":
      return t.catJudiciary;
    case "science":
      return t.catScience;
    case "sports":
      return t.catSports;
    case "entertainment":
      return t.catEntertainment;
    case "international":
      return t.catInternational;
    case "culture":
      return t.catCulture;
    case "crime":
      return t.catCrime;
    default:
      return category;
  }
}

/**
 * Returns localized string for sentiment
 */
export function getLocalizedSentiment(sentiment: string, lang: SupportedLanguage): string {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.English;
  const key = sentiment.trim().toLowerCase();
  switch (key) {
    case "positive":
      return t.sentPositive;
    case "neutral":
      return t.sentNeutral;
    case "negative":
      return t.sentNegative;
    case "all":
      return t.all;
    default:
      return sentiment;
  }
}

/**
 * Localizes an article's title, body, and category
 */
export function localizeArticle(article: ArticleItem, lang: SupportedLanguage): ArticleItem {
  if (lang === "English") return article;

  const translation = ARTICLE_TRANSLATIONS[article.id]?.[lang];
  return {
    ...article,
    Title: translation?.title || article.Title,
    Heading: translation?.title || article.Heading || article.Title,
    Body: translation?.body || article.Body,
    Category: getLocalizedCategory(article.Category, lang),
  };
}
