* Generated by screen2jsim
*WHY JJ at IC TEMP=119 , avg voltage, beta=0.04, gam = 0.2
I0 0 1  PWL(0 0  70p 25UA)
B2 1 0 jm
R1 1 0 1
iR1 1 0 NOISE(81.114179p 0.0 1.0p) 
r2 1 2 1.7K
L2 2 3 0.1uH
c2 3 0 0.2pF
r3 3 4 10K
L3 4 5 0.5uH
c3 5 0 0.02pF
.PRINT DEVI I0   
.PRINT DEVV c3   
.MODEL jm JJ(RTYPE=0, ICRIT= 25UA, CAP=0.0324PF)   
.TRAN  2n 2.01n  2n 
*REF 1.16e-05 FROM Likharev pg 116 as implemented in ah.c


