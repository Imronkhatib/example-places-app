class Place < ApplicationRecord

  def as_json
    {
      name: name,
      address: address
    }
  end
end
