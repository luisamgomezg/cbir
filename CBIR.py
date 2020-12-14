import numpy as np
import cv2 
from matplotlib import pyplot as plt
from math import*
from decimal import Decimal
from skimage.io import imread
import matplotlib.image as mpimg
import os

def leerImg(path):
  img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
  img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
  return img

def extraccionCaract(img):
    orb = cv2.ORB_create(nfeatures=2000)
    keypoints,descriptor = orb.detectAndCompute(img,None)
    return keypoints,descriptor

def dibujarPuntos(img,keypoints):
    img = cv2.drawKeypoints(img, keypoints, None)
    return img

def comparacion(img1,img2,descriptor1,descriptor2,keypoints1,keypoints2):
    bf = cv2.BFMatcher(cv2.NORM_L2, crossCheck=True)
    matches = bf.match(descriptor1,descriptor2)
    matches = sorted(matches, key = lambda x:x.distance)
    imgFinal = cv2.drawMatches(img1,keypoints1,img2,keypoints2,matches[:10],None,flags=2)
    #plt.imshow(imgFinal),plt.show()
    #print('Matches: ',len(matches))
    return len(matches)
    
def load_images(folder): 
    images = [] 
    for filename in os.listdir(folder): 
        img = leerImg(os.path.join(folder,filename))
        if img is not None: 
            images.append(img)
    return images
  
def compFinal(dirImg,img1,descriptor1,keypoints1):  
    vectMatch = []
    for i in range(0,len(dirImg)):
        img2 = dirImg[i]
        keypoints2, descriptor2 = extraccionCaract(img2)
        imgPuntos2 = dibujarPuntos(img2,keypoints1)
        cantidad = comparacion(img1,img2,descriptor1,descriptor2,keypoints1,keypoints2)
        vectMatch.append(cantidad)
    maximo = max(vectMatch)
    return maximo

def detectarHongo(tina,candi,versi):
    hongo = ''
    if tina > candi:
        if tina > versi:
            hongo = 'Tiña'
        else:
            hongo = 'Versicolor'
    elif candi > versi:
        hongo = 'Candidiasis'
    else:
        hongo = 'Versicolor'
    return hongo

def final():
    img1 = leerImg('./imgHongo.jpg')
    keypoints1, descriptor1 = extraccionCaract(img1)
    imgPuntos1 = dibujarPuntos(img1,keypoints1)
    dirImg1 = load_images("./Imagenes/Candidiasis")
    dirImg2 = load_images("./Imagenes/Versicolor")
    dirImg3 = load_images("./Imagenes/Tina")
    candi = compFinal(dirImg1,img1,descriptor1,keypoints1)
    versi = compFinal(dirImg2,img1,descriptor1,keypoints1)
    tina = compFinal(dirImg3,img1,descriptor1,keypoints1)
    print(candi,versi,tina)
    resul = detectarHongo(tina,candi,versi)
    return resul
       
#final()
