* Generated by screen2jsim
*WHY JJ above IC TEMP=0, avg voltage
I0 0 1  PWL(0 0 40p 150UA)
B2 1 0 jm
R1 1 0 1
r2 1 2 1.7K
L2 2 3 0.1uH
c2 3 0 0.1pF
r3 3 4 10K
L3 4 5 0.5uH
c3 5 0 0.01pF
.PRINT DEVI I0   
.PRINT DEVV c3   
.MODEL jm JJ(RTYPE=0, ICRIT= 100UA, CAP=0.1PF)   
.TRAN  1n 2.01n  2n 
*REF 2.0e-9 1.50e-04 1.118e-04


