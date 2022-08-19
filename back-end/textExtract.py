import os, re
import numpy as np
import urllib.request as ur
from bs4 import BeautifulSoup as bs
# from konlpy.tag import Twitter
from konlpy.tag import Okt
import collections


def _minMaxFunc(X):
    key_lst = X.keys()
    value_lst = np.array(list(X.values()))

    # min max 적용
    scaled_value = (value_lst - value_lst.min()) / (value_lst.max() - value_lst.min()) * 9 + 1

    # 새로운 dict 생성
    new_dict = {}
    for i, j in zip(key_lst, scaled_value):
        new_dict[i] = round(j)

    return new_dict


def textMining(news_url):
    # nlpy = Twitter()
    nlpy = Okt()

    # 크롤링
    soup = bs(ur.urlopen(news_url).read(), 'html.parser')
    content_word = soup.find("div", {"id": "dic_area"}).text  # 본문 추출

    # 명사 추출
    word_lst = nlpy.nouns(content_word)

    word_dic = {}
    for n, c in collections.Counter(word_lst).most_common():
        # 사용하지 않는 단어 + 1글자 단어 제외
        if (len(n) > 1):
            word_dic[n] = c

    # 스케일 변경
    scale_word_dic = _minMaxFunc(word_dic)

    return scale_word_dic

