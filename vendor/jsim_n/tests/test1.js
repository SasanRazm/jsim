* Generated by screen2jsim
*WHY Capacitor charging
I0  0  1 PULSE(0 1MA 20p 5p 5p 5P 200P)
C2 1 0 1.0pf
R1 1 0 100MEG
.PRINT DEVI I0   
.PRINT DEVV C2   

.TRAN  100p 100p  50p 
*REF 5.000e-11 0.000e-04 1.000e-02


