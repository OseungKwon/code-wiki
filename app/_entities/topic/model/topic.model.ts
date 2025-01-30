import { TopicContentParagraphFeedbackType } from '@/_entities/topic/enum';

export interface Topic {
    id: string;
    title: string;
    content: {
        topicContent: TopicContent[];
    };
    tags: TopicTag[];
    authors: TopicAuthor[];
    // category: TODO;
    createdDate: Date;
    updatedDate: Date;
}

export interface TopicContent {
    paragraph: TopicContentParagraph[];
}

export interface TopicContentParagraph {
    content: string;
    description?: string;
    feedback: TopicContentParagraphFeedback[];
}

export interface TopicContentParagraphFeedback {
    type: TopicContentParagraphFeedbackType;
    count: number;
}

export interface TopicTag {
    id: string;
    name: string;
}

export interface TopicAuthor {
    id: string;
    nickname: string;
}
