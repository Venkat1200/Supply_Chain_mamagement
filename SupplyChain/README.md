# supply-chain-construction

implement a private Blockchain for construction industry of medium size


# Add a new participant
https://hyperledger.github.io/composer/managing/participant-add.html

composer participant add -d '' -c admin@supply-chain-management

# Issue an identity
composer identity issue -u 0001 -a org.iff.supplychain.network.Supplier#0001 -c  admin@supply-chain-management  -x

#composre card import
composer card import --f 0001@supply-chain-management.card

# List the identities
composer identity list -c admin@supply-chain-management