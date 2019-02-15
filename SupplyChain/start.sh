


composer network install --card PeerAdmin@hlfv1 --archiveFile supply-chain-management@0.0.6.bna

composer network start --networkName  supply-chain-management --networkVersion 0.0.6 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

composer network ping --card  admin@supply-chain-management

composer-rest-server


